#!/usr/bin/env python3
"""Check local links and duplicate IDs, using only Python's standard library."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.links = []
        self.errors = []

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        identifier = attributes.get('id')
        if identifier:
            if identifier in self.ids:
                self.errors.append(f'{self.path.name}: duplicate ID {identifier}')
            self.ids.add(identifier)
        for key in ('href', 'src'):
            if key in attributes:
                self.links.append(attributes[key])


def main():
    pages = {}
    for path in ROOT.glob('*.html'):
        page = Page(path)
        page.feed(path.read_text())
        pages[path.resolve()] = page
    errors = [error for page in pages.values() for error in page.errors]
    count = 0
    for path, page in pages.items():
        for link in page.links:
            url = urlsplit(link)
            if url.scheme or url.netloc:
                continue
            target = (path.parent / unquote(url.path)).resolve() if url.path else path
            count += 1
            if not target.is_file():
                errors.append(f'{path.name}: missing file {link}')
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f'{path.name}: missing anchor {link}')
    if errors:
        raise SystemExit('\n'.join(errors))
    print(f'Checked {len(pages)} HTML files and {count} local links: all resolve.')


if __name__ == '__main__':
    main()
