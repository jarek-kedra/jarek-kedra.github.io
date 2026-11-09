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

### Basic facts ###

<a name="bip-commutator-trick">
</a>
**BIP commutator trick.** 
*Let $g_{1_{}},\ldots,g_{m_{}}\in G$. Suppose that there
exists $f\in G$ such that the conjugates ${f^i}(g_{i_{}})$ pairwise
commute for $i=0,1,\ldots,m$. Then there exists $h\in G$ such
that*
$$
g_{m_{}}\cdots\ g_{2_{}}\ g_{1_{}} = [f,h]\ {f^m}(g_{m_{}})\ \cdots\ f^2(g_{2_{}})\ {f^1}(g_{1_{}}).
$$

See Lemma 2.5 and 2.6 in
[[arxiv:0710.1412](https://arxiv.org/abs/0710.1412)] for a proof. 

In order to visualise the proof assume that $G$ is a group of diffeomorphisms
of a manifold.  In the picture below the diffeomorphisms $r,g,b\in G$ are
supported in the suitably coloured oriented circles and the diffeomorphism $f$
is a shift to the right displacing the supports.

Single commutator $[r,f]$:

<svg height="100" width="800">
  <circle cx="50" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="58,6 45,10 58,16" stroke="red" stroke-width="3" fill="none"/>
  <circle cx="250" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="245,6 258,11 245,16" stroke="red" stroke-width="3" fill="none"/>
</svg>
The left hand side red circle is $r$ and the right hand side circle
if $fr^{-1}f^{-1}$.


Diffeomorphism $h=rgb\cdot f(gb) \cdot f^2(b)$:

<svg height="150" width="800">
  <circle cx="50" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="58,6 45,10 58,16" stroke="red" stroke-width="3" fill="none"/>
  <circle cx="80" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="88,6 75,10 88,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="65" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="73,36 60,40 73,46" stroke="blue" stroke-width="3" fill="none"/>
  <circle cx="280" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="288,6 275,10 288,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="265" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="273,36 260,40 273,46" stroke="blue" stroke-width="3" fill="none"/>
  <circle cx="465" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="473,36 460,40 473,46" stroke="blue" stroke-width="3" fill="none"/>
</svg>

Its conjugate  $f(h)$:

<svg height="150" width="800">
  <circle cx="250" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="245,6 258,11 245,16" stroke="red" stroke-width="3" fill="none"/>
  <circle cx="280" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="275,6 288,11 275,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="265" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="260,36 273,41 260,46" stroke="blue" stroke-width="3" fill="none"/>
  <circle cx="480" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="475,6 488,11 475,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="465" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="460,36 473,41 460,46" stroke="blue" stroke-width="3" fill="none"/>
  <circle cx="665" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="660,36 673,41 660,46" stroke="blue" stroke-width="3" fill="none"/>
</svg>

The commutator
$[h,f]=h\cdot f(h^{-1})= rgb\cdot f(r^{-1})\cdot f^2(g^{-1}) \cdot f^3(b^{-1})$:

<svg height="150" width="800">
  <circle cx="50" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="58,6 45,10 58,16" stroke="red" stroke-width="3" fill="none"/>
  <circle cx="80" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="88,6 75,10 88,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="65" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="73,36 60,40 73,46" stroke="blue" stroke-width="3" fill="none"/>
  <circle cx="250" cy="50" r="40" stroke="red" stroke-width="3" fill="none" />
  <polyline points="258,6 245,10 258,16" stroke="red" stroke-width="3" fill="none"/>
  <circle cx="480" cy="50" r="40" stroke="green" stroke-width="3" fill="none" />
  <polyline points="488,6 475,10 488,16" stroke="green" stroke-width="3" fill="none"/>
  <circle cx="665" cy="80" r="40" stroke="blue" stroke-width="3" fill="none" />
  <polyline points="673,36 660,40 673,46" stroke="blue" stroke-width="3" fill="none"/>
</svg>

It follows that $rgb = [h,f]\cdot f(r) \cdot f^2(g) \cdot f^3(b)$. 

------


**Bounded cyclic subgroup trick.** *Let $g,h\in G$ be elements such
that $g$ commutes with the conjugate $^hg$. Then the
cyclic subgroup generated by the commutator $[g,h]$ is bounded in $G$.*

*Proof.* Observe (by induction) that $[g,h]^n=[g^n,h]$ for any integer 
$n\in \mathbf Z$. It implies that $[g,h]^n$ is a product of $g^nhg^{-n}$
and $h^{-1}$ and hence the cyclic subgroup generated by $[g,h]$ is
bounded by $2\|h\|$. 
$\square$

This trick can be applied to Baumslag-Solitar groups, nilpotent groups
and others. For example, in the group 
$G = \langle g,h \ | \ [g,^hg]=1\rangle$
the cyclic subgroup generated by $[g,h]$ is bounded. On the other hand
this is a CAT(0)-group.

--------

**Lipschitz maximality.** *Let $G$ be a finitely conjugation generated group
and let $(H,\nu)$ be any group equipped with a conjugation invariant norm.
Then every homomorphism $\psi\colon G\to H$ is Lipschitz with respect
to the conjugation invariant word norm $\|\ \|$ on $G$. More precisely, there
exists a constant $C>0$ such that
$$
\nu(\psi(g))\leq C \|g\|,
$$
for any $g\in G$.*

*Proof.* Let $S\subset G$ be a symmetric conjugation generating set and let 
$C = \max\{\nu(s)\ |\ s\in S\}$. Let $g\in G$. Then $g=s_1 \cdots s_n$ for
$s_i\in S$ and we have

<center>
$\nu(\psi(g)) = \nu(\psi(s_1\cdots s_n))
\leq \sum \nu(\psi(s_i))
\leq C\ \|g\|$
</center>

which proves the statement.
$\square$

In particular, by applying the above fact to the identity ${\rm Id}\colon G\to G$
we obtain that the Lipschitz class of the conjugation invariant word norm is
maximal among all conjugation invariant word norms on $G$.

------

**Quasimorphisms are Lipschitz.** *Let $\psi\colon G\to \mathbf R$ be
a homogeneous quasimorphism. If $\psi$ is bounded on a generating
set $S\subset G$ then there exists a constant $C>0$
such that $|\psi(g)|\leq C\|g\|_S$ for all $g\in G$.*

*Proof.* 
Let $\max = \max_{s\in S}|\psi(s)|$ and let $n=\|g\|$.
\begin{align}
|\psi(g)| &= |\psi(s_1 \cdots s_n )| \\
&\leq \sum |\psi(s_i)| + (n-1)D\\
&\leq (D + \max) \|g\|_S. 
\end{align}
$\square$

In particular, if $G$ is finitely conjugation generated then every quasimorphism
is Lipschitz with respect to the conjugation invariant word norm.


-----

**Kotschick's trick.** *Let $H\subseteq G$ be a subgroup. Suppose that for
any $n\in \mathbf N$ there exist $g_1,\ldots,g_n$ such that the subgroups
$g_iHg_i^{-1}$ pairwise commute. Then every homogeneuos quasimorphism
$\psi\colon G\to \mathbf R$ restricted to $H$ is a homomorphism.*

*Proof.* First observe that if a homogeneous quasimorphism
$\psi\colon H\to \mathbf R$ vanishes on single commutators then
it is a homomorphism. Indeed,
\begin{align}
D &= \sup_{g,h} |\psi(g)+\psi(h)-\psi(gh)|\\
&= \sup_{g,h} \frac{1}{n}| \psi(g^n) + \psi(h^n) - \psi((gh)^n)|\\
&= \sup_{g,h} \frac{1}{n}\big | \psi\left(g^nh^{n}(gh)^{-n}\right)\big |\\
&= \sup_{g,h}\frac{1}{n} \frac{nD}{2} = \frac{1}{2}D
\end{align}






<!-- END OF MARKDOWN -->




</body>
</html>
