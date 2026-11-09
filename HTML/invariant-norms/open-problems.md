<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>
Invariant norms on groups
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

### Open Problems ###

&nbsp; &nbsp; **Autonomous norm.**

1. What is the diameter of the autonomous norm on ${\rm Ham}(\mathbf R^{2n})$?  
	* It is known that the norm is bounded by $3$
	  [[Brandenbursky-Kędra arxiv:1603.02864](http://arxiv.org/abs/1603.02864)], 
so the question is whether the diameter is $2$ or $3$.
<br> 
<br>

2. Is the diameter of the autonomous norm on ${\rm Ham}(M,\omega)$
infinite for any closed (or finite volume) symplectic manifold?
	* This is known to be true for closed surfaces and the $2$-disc
	  [Brandenbursky-Kędra-Shelukhin: 
[arxiv:1207.0624](http://arxiv.org/abs/1207.0624),
[arxiv:1405.7931](https://arxiv.org/abs/1405.7931),
[arxiv:1602.03287](http://arxiv.org/abs/1602.03287)].
<br><br>




	**Burago-Ivanov-Polterovich** [[arxiv:0710.1412]](https://arxiv.org/abs/0710.1412).

2. Does there exist a group that does not admit a stably unbounded norm and yet
   admits a norm unbounded on some cyclic subgroup?

3. Does there exist a finitely presented group $G$ with finite abelianisation
   whose commutator length is unbounded but stably bounded?

4. Does there exist an unbounded finitely presented group which admits no
   unbounded quasi-morphisms?
	* There exist a finitely generated group with these properties
[[Muranov arxiv:0909.2294](https://arxiv.org/abs/0909.2294)].  
<br>

5. Does there exist a group $G$ with finite abelianisation whose commutator
   length is stably bounded, but which admits a stably unbounded norm? In other
words, does the existence of a stably unbounded norm on $G$ yields existence of
non-trivial quasi-morphisms? Is there a group $G$ that admits no non-trivial
quasi-morphisms but carries a norm that is unbounded on some cyclic subgroup.
**Solved:**
	* The commutator subgroup $[B_{\infty},B_{\infty}]$ of the infinite
	  braid group has trivial abelianisation, is stably unbounded and has
commutator length bounded by $2$
[[Brandenbursky-Kędra arxiv:1402.3191](https://arxiv.org/abs/1402.3191)].
	* The kernel of the Calabi homomorphisms 
$\mathsf{CAL}\colon{\rm Ham}^c(\mathbf R^{2n})\to \mathbf R$ is simple,
has commutator length bounded by $2$ and is stably unbounded
[[Kawasaki-2016](http://www.intlpress.com/site/pub/pages/journals/items/jsg/content/vols/0014/0001/a011/)].


6. Is the fragmentation norm  bounded for closed surfaces?	

7. Assume that $n \geq 3$. Does the identity component of the group of volume
   preserving diffeomorphisms of the sphere $\mathbf S^n$ admit an unbounded
conjugation-invariant norm? Does the identity component of the group of
compactly supported volume preserving diffeomorphisms of the ball of finite
volume admit an unbounded conjugation-invariant norm?<br><br>




	**Dichotomy.**

2. Find an example of a finitely presented group $G$ and an element $g \in G$
   such that the sequence $\|g^n\|$ is unbounded and has sublinear
growth.<br><br>

	**Diffeomorphisms.**

3. Let $M$ be a smooth manifold. Is the group ${\rm Diff}^c_0(M)$ of compactly
   supported diffeomorphisms of $M$ isotopic to the identity (uniformly)
bounded?
	* The uniform boundedness is known to be true if either $\dim M \neq 2,4$ or
$M$ has no handles in middle dimension:
[[Tsuboi-2008]](http://kyokan.ms.u-tokyo.ac.jp/users/preprint/pdf/2008-26.pdf),
[[Tsuboi-2009]](http://kyokan.ms.u-tokyo.ac.jp/users/preprint/pdf/2009-2.pdf)

	**Hofer's norm.**

3. Is the diameter of the Hofer norm always infinite?
	* *All known examples have infinite diameter.*  
4. What are possible Hofer topologies on the infintie cyclic group?<br><br>

	**Lattices.**

2. Are lattices in semisimple Lie groups of higher rank bounded?
	* This is known to be true for $S$-arithmetic Chevalley groups
and their subgroups of finite index 
[[Gal-Kędra arxiv:1102.0423](https://arxiv.org/abs/1102.0423)].
	* Cocompact lattices are not *strongly* bounded 
[Kędra-Libman-Martin].



<!-- END OF MARKDOWN -->




</body>
</html>
