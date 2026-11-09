<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>
Invariant norms on groups - definitions.
</title>

<link rel="stylesheet" type="text/css" href="global.css" media="screen">


<!-- MATHJAX -->
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>

<script type="text/javascript" async 
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

</head>


<body>

<!-- LEFT PANEL -->
<div id="logo">
<svg height="140" width="140">
  <polyline points="30,40 70,10 110,40" stroke="black" stroke-width="2" fill="none"/>
  <polyline points="40,30 10,70 40,110" stroke="black" stroke-width="2" fill="none"/>
  <polyline points="30,100 70,130 110,100" stroke="black" stroke-width="2" fill="none"/>
  <polyline points="100,30 130,70 100,110" stroke="black" stroke-width="2" fill="none"/>
  <polyline points="120,50 130,70 120,90" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="20,50 10,70 20,90" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="50,20 70,10 90,20" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="50,120 70,130 90,120" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="40,50 100,90" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="50,40 90,100" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="100,50 40,90" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="50,100 90,40" stroke="green" stroke-width="2" fill="none"/>
  <polyline points="10,60 70,30 130,60" stroke="blue" stroke-width="2" fill="none"/>
  <polyline points="10,80 70,110 130,80" stroke="blue" stroke-width="2" fill="none"/>
  <polyline points="60,10 30,70 60,130" stroke="blue" stroke-width="2" fill="none"/>
  <polyline points="80,10 110,70 80,130" stroke="blue" stroke-width="2" fill="none"/>
  <polyline points="70,0 70,140" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="0,70 140,70" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="30,40 30,100" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="110,40 110,100" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="10,60 10,80" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="130,60 130,80" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="50,20 50,40" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="90,20 90,40" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="50,100 50,120" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="90,100 90,120" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="40,30 100,30" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="40,110 100,110" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="60,10 80,10" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="60,130 80,130" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="20,50 40,50" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="20,90 40,90" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="100,50 120,50" stroke="red" stroke-width="3" fill="none"/>
  <polyline points="100,90 120,90" stroke="red" stroke-width="3" fill="none"/>
</svg>
</div>
<div id="home" style="font-size:smaller">
*  [Home](home.html)
*  [Introduction](intro.html)
*  [Definitions](definitions.html)
*  [Examples](examples.html)
*  [Basic facts](basic-facts.html)
*  [Groups](groups.html)
*  [Open Problems](open-problems.html)
*  [Index](index.html)
</div>

<div id="signature">
kedra&#9760;abdn.ac.uk
</div>


<!-- EDITION IN MARKDOWN -->
## Definitions. ##


###Notation:###
* The neutral element of any group is denoted by $1$.
* If $G\trianglelefteq H$ is a normal subgrup then the conjugation action of $H$
  on $G$ is denoted by $hgh^{-1}$ or $^hg$ or $h(g)$; it is a left action.
* $H\to {\mathsf {Aut}}(G)$ - a left action of a group $H$ on $G$;
the action of $h \in H$ on $G$ is denoted by $h(g)$.


###Main concepts:###

<label>
  <input id="read-more" type="checkbox"> Norm.
  <div id="read-less">

------

<a name="norm">
</a>
**Norm.** A nonnegative function $\nu\colon G\to \mathbf R$ is called a norm
if it satisfies the following axioms for all $g,h\in G$:

1. $\nu(g)=0$ if and only if $g=1$. 
2. $\nu(g^{-1})=\nu(g)$.
3. $\nu(fg) \leq \nu(f) + \nu(g)$.

If in addition:

4. $\nu(h(g))) = \nu(g)$.

for every $h\in H\to \mathsf{Aut}(G)$ then the norm is called $H$-invariant; it
is assumed that the action is understood.  A norm $\nu$ defines a metric by
$d_{\nu}(f,g)_{}=\nu\left( fg^{-1} \right)$.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Bounded/unbounded group.
  <div id="read-less">

------

<a name="bounded">
</a>
**Bounded.** The group $G$ is bounded if every conjugation invariant norm on
$G$ has finite diameter; it is *unbounded* otherwise.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Stably unbounded group.
  <div id="read-less">

------

<a name="stably-unbounded">
</a>
**Stably unbounded.** A group $G$ is called *stably unbounded* if there exists
a norm $\nu$ on $G$ and an element $g\in G$ such that
$$
\lim_{n_{}\to \infty} \frac{\nu(g^n)}{n}>0.
$$

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Strongly bounded group.
  <div id="read-less">

------

A bounded group $G$ is called *$k$-strongly bounded* if there exists a number
$\Delta_k(G)$ such that the diameter of the word norm associated with a union
of at most $k$ conjugacy classes is bounded above by $\Delta_k(G)$.

------
 
</div>
</label>
</label>
<label>
  <input id="read-more" type="checkbox"> Uniformly bounded group.
  <div id="read-less">

------

A bounded group $G$ is called *uniformly bounded* if there exists a number
$\Delta(G)$ such that the diameter of the word norm associated with a union
of finitely many  conjugacy classes is bounded above by $\Delta(G)$.
 
-------

</div>
</label>



###All definitions in alphabetical order:###

<label>
  <input id="read-more" type="checkbox"> Conjugation generation.
  <div id="read-less">

-------

<a name="conjugation-generation">
</a>
**Conjugation generation.** A group $G$ is conjugation-generated by 
a set $S\subset G$ if it is generated by the set of conjugates
$g^{-1}sg$, where $g\in G$ and $s\in S\cup S^{-1}$.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Conjugation generation: finite.
  <div id="read-less">

------

<a name="finite-conjugation-generation">
</a>
**Finite conjugation generation.** A group $G$ is finitely conjugation-generated if
it is conjugation-generated by a finite set $S$.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Group: bounded.
  <div id="read-less">

------

<a name="bounded">
</a>
**Bounded.** The group $G$ is bounded if every conjugation invariant norm on
$G$ has finite diameter; it is *unbounded* otherwise.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Group: stably unbounded.
  <div id="read-less">

------

<a name="stably-unbounded">
</a>
**Stably unbounded.** A group $G$ is called *stably unbounded* if there exists
a norm $\nu$ on $G$ and an element $g\in G$ with positive stable length.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Norm.
  <div id="read-less">

------

<a name="norm">
</a>
**Norm.** A nonnegative function $\nu\colon G\to \mathbf R$ is called a norm
if it satisfies the following axioms for all $g,h\in G$:

1. $\nu(g)=0$ if and only if $g=1$. 
2. $\nu(g^{-1})=\nu(g)$.
3. $\nu(fg) \leq \nu(f) + \nu(g)$.

If in addition:

4. $\nu(h(g))) = \nu(g)$.

for every $h\in H\to \mathsf{Aut}(G)$ then the norm is called $H$-invariant; it
is assumed that the action is understood.  A norm $\nu$ defines a metric by
$d_{\nu}(f,g)_{}=\nu\left( fg^{-1} \right)$.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Norm: stable.
  <div id="read-less">

------

<a name="stable-length">
</a>
**Stable length.** If $\nu$ is a norm on $G$ then the *stable length* of an element
$g\in G$ with respect to $\nu$ is defined by 
$s\nu(g) = \lim_{n\to \infty} \frac{\nu(g^n)}{n}_{}$.  It is also called the
_translation length_.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Norm: diameter.
  <div id="read-less">

------

<a name="diamterer">
</a>
**Diameter.** The diameter of the norm $\nu$ on $G$ is defined and denoted by
${\rm diam}(\nu)=\nu(G)=\sup\{ \nu(g)\ | \ g\in G\}$.

-------

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Quasimorphism.
  <div id="read-less">

------

<a name="quasimorphisms">
</a>
**Quasimorphism.** A function $\psi\colon G\to \mathbf R$ is called a
*quasimorphism* if there exists a constant $D\geq 0$ such that
$$
|\psi(g) - \psi(gh) + \psi(h)| \leq D
$$
for all $g,h\in G$. If in addition $\psi(g^n) = n\psi(g)$ then
$\psi$ is called *homogeneous*. The number $D$ is called the *defect*
of $\psi$.

-----

</div>
</label>
<!-- END OF MARKDOWN -->





<!--
<div id="box"> 
<p id="date"></p>
<script>
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "." + m + "." + y;
</script>
kedra&#9760;abdn.ac.uk
</div>
-->

</body>
</html>
