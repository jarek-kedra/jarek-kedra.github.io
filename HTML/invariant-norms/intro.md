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


## Introduction##

An [*invariant norm*](definitions.html#norm) on a group $G$ is a nonnegative
function which is symmetric, satisfies the triangle inequality and is invariant
with respect to certain automorphisms of $G$. The most important class consists
of norm invariant under conjugation. Although such norms have been studied -
often under different names - for a long time, the first systematic treatment
was done by Burago, Ivanov and Polterovich in
[[arxiv:0710.1412]](https://arxiv.org/abs/0710.1412), where the basic notions
were abstracted and a number of stimulating open problems asked.

Most of the invariant norms are word norms with a few notable exceptions.
Let us discuss some areas of mathematics where invariant norms are present.

* **Symplectic geometry.** The group ${\rm Ham}(M,\omega)$ of compactly
  supported Hamiltonian diffeomorphisms of a symplectic manifold $(M,\omega)$
admits a natural conjugation invariant norm called the *Hofer norm*. 
This norm is induces a nondiscrete and separable topology. This is highly
unusual and it is one of the *wonders of symplectic topology*, according
to
[[Polterovich-Rosen-2014](https://sites.google.com/site/polterov/miscellaneoustexts/function-theory-on-symplectic-manifolds)].  


* **Dynamics.** Groups of diffeomorphisms of manifolds have geometrically
  meaningful generators; e.g., elements included in flows of vector fields,
conjugacy classes with prescribed dynamical features, elements supported in sets
with prescribed properties. The associated word norms for such generating sets
are conjugation invariant.

* **Finite groups.** Finite simple groups admit interesting conjugation
  invariant generatings sets; e.g., single conjugacy class, sets of elements of
a given order. The associated (conjugation invariant) word norms  have been
extensively studied. Of course, every norm on a finite group has finite
diameter. However, it is interesting to study norms suitably defined on infinte
families of finite groups adnd to obtain uniform bounds. For example,
there exists a constant $c>0$ such that
any element in any finite simple group is a product of
at most $c$ involutions
[[Liebeck-Shalev-2001](http://www.jstor.org/stable/3062101?seq=1#page_scan_tab_contents)].

* **Metric geometry.** The fundamental group of a metric space is its homotopy
  invariant. However, it can be equipped with a geometrically defined
conjugation invariant generating set and hence the associated word norm will
reflect the metric structure of the space.




<!-- END OF MARKDOWN -->



</body>
</html>
