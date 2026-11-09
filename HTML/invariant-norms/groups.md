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


## Invariant norms on groups ##
Given a group we investigate whether it has the following properties:

* Bounded.
	* Strongly bounded.
	* Uniformly bounded.
* Unbounded.
	* Stably unbounded.
	* Admits an unbounded quasimorphism.

Click on the name of a group to expand.

<!--
<label>
  <input id="read-more" type="checkbox"> 
  <div id="read-less">

-----

-----

</div>
</label>
-->
<label>
  <input id="read-more" type="checkbox"> Baumslag-Solitar groups.
  <div id="read-less">

-----

Let ${\rm BS}(p,q)=\left< x,t | t x^p t^{-1} = x^q \right>$ be a Baumslag-Solitar
group, where $p,q\in \mathbf N$ are relatively prime positive integers.
It admits a surjective homomorphism $BS(p,q)\to \mathbf Z$ defined
by $x\mapsto 0$ and $t\mapsto 1$.
It is therefore a stably unbounded group.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Braid groups and their commutator
subgroups. 
  <div id="read-less">

-----

Let $\mathbf B_n$ be the braid group on $n$-strings. Its abelianisation
is infinite cyclic and hence the group is stably unbouned. It is interesting
to consider the commutator subgroup of a braid group. Since $B_2$ is infinite
cyclic its commutator is trivial. The group $[B_3,B_3]$ is free of rank two
so it is stably unbounded. Next, the group $[B_4,B_4]$ is a semidirect
product of two nonabelian free groups, so it is stably unbounded as well.

If $n>4$ then the commutator subgroup $[B_n,B_n]$ is perfect. In particular, it
does not admit nontrivial homomorphims to abelian groups. However, it admits
unbounded quasimorphisms defined by the signature of the link obtained by
closing braids. In particular, the commutator length of $[B_n,B_n]$ for $n\geq
5$ is infinite.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Braid group (infinite). 
  <div id="read-less">

-----

Let $\mathbf B = \mathbf B_{\infty_{}}$ be the braid group on infinitely many
strings. More precisely, it is the ascending union of braid groups $B_2\subset
B_3\subset ...$, with the obvious inclusions.  As in the previous example the
abelianisation of $\mathbf B$ is infinite cyclic, so the group is stably
unbounded and it is interesting to consider its commutator subgroup. 

In contrast to the finite case, the group $[\mathbf B,\mathbf B]$ does not admit
unbounded quasimorphisms. More precisely, its commutator length is bounded by
$2$.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Compact simple Lie groups. 
  <div id="read-less">

-----

Let $G={\rm SO}(3)$. This is a simple but not uniformly simple group.  To see
this let $f\in G$ be a rotation through an angle $\epsilon >0$ and let $g\in G$
be a rotation through angle $\alpha$. If $g$ is expressed as a product of
conjugates of $f$ then the number of factors is at least $\alpha/\epsilon$.
Thus taking $\epsilon$ arbitrarily small shows that $G$ is not unifromly
simple. Equivalently, $G$ is not strongly bounded.

This argument works for other compact simple Lie groups.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Diffeomorphisms of a  manifold.
  <div id="read-less">

-----

${\rm Diff}_0(M)_{}$. 
Let $M$ be a smooth manifold and let $G={\rm Diff}_0^c(M)_{}$ be the
group of compactly supported $C^r$-diffeomorphisms of $M$ isotopic to
the identity through a compactly supported isotopy. Assume that
$r\neq \dim M +1$.

**Theorem** (Herman-Mather-Thurston-1974). *The group $G$ is **perfect**.*

Haller, Rybicki and Teichmann proposed a simpler proof
[arxiv:0409605](https://arxiv.org/abs/math/0409605) for $M$ of dimension at
least $2$ which still relies on one nontrivial result by Herman.  A slightly
more simplified version of their argument was written by Mann
[Mann-2016](https://math.berkeley.edu/~kpmann/perfectness2.pdf).

*Remark* If $r = \dim M + 1$ then the perfectness of diffeomorphism is
unknown, see a 
[lecture by Etienne Ghys](https://www.youtube.com/watch?v=WmqISMJMq44).

**Theorem.** *The group $G$ is **simple**.*

Let $1\neq f\in G$ be a nontrivial element. The aim is to express any element
$g\in G$ as a product of conugates of $f$. This is equivalent to simplicity.
Since $f$ is nontrivial, there exists a ball $B\subset M$ such that $f(B)\cap B
= \emptyset$. By a ball we mean a subset of $M$ diffeomorphic to a Euclidean
ball.  The proof has the following steps.

1. $G$ has the *fragmentation property*. This means that every diffeomorphism
   $g\in G$ can be expressed as a product of diffeomorphisms supported in
balls.

2. Suppose that $g\in G$ is supported in the ball $B$ and isotopic to the
   identity through an isotopy supported in $B$. Since ${\rm Diff}_0^c(B)_{}$
is perfect $g = [a_1,b_1]\cdots [a_m,b_m]$ where $a_i,b_i\in {\rm
Diff}_0^c(B)_{}$.

* Let $a,b \in {\rm Diff}_0^c(B)_{}$. Since $f$ displaces the ball $B$, we get
  that $[a,b] = [[a,f],b]$ and hence $[a,b]$ is a product of four conjugates of
$f$.

* It follows that $g = [a_1,b_1]\cdots [a_m,b_m]$ is a product
of $4m$ conjugates of $f$.

* Let $B'\subset M$ be a ball. There exists $h\in G$ such that $h(B')=B$.
If $g=[a_1,b_1]\cdots [a_m,b_m]$, where $a_i,b_i$ are supported in $B'$
then $g$ is a product of $4m$ conjugates of $h^{-1}fh$ which themselves
are conjugates of $f$.

3. We conclude that $g$ can be expressed as a product of $4k$ conjugates
of $f$, where $k=\operatorname{Frag}(g)$ is the fragmentation norm of $g$.
In particular, $G$ is simple. Moreover, the uniform simplicity is equivalent
to boundedness of the fragmentation norm. 

**Theorem** (Tsuboi). *Let $M$ be the interior of a compact manifold.  If
$\dim M\geq 5$ or $M$ has no handles in middle dimension then the group $G$ is
**uniformly simple**.*

Let $f,g\in G$ be nontrivial diffeomorphisms. The aim is to express
$g$ as a product of uniformly bounded number of conjugates of $f$
The proof has the following steps:

1. If $M$ has only handles of indices smaller than $\frac{1}{2}\dim M$
then $g$ is a product of $4c+1$ commutators supported in balls. Here
$c$ is the number of indices of the handle decomposition of $M$.
Consequently, $g$ is a product of $4(4c+1)$ conjugates of $f$

2. Assume that $M$ has no handles in middle index.  Decompose $M$ into a union
of open submanifolds $M_1\cup M_2$ as in (1) and prove that $g$ can be
decomposed as a product $g = g_1g_2$, where $g_i\in {\rm Diff}_0^c(M_i)$.
Thus $g$ is a product of $8(4c+1)$ conjugates of $f$.

3. If $M$ has handles in middle dimension then a more sofisticated
version of the argument in (2) can be done provided $\dim M \geq 6$.

*Remark.* Some parts of the proof given by Tsuboi have been independently
done by Burago-Ivanov-Polterovich. Combining the two approaches can
slightly simplify the original Tsuboi's proof.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Free groups.
  <div id="read-less">

-----

Let $\mathbf F_n$ be a nonabelian free group generated by $n$ elements.
Since it admits unbounded quasimorphisms (e.g., counting ones) it is
stably unbounded. 

**Theorem.** The ${\sf Aut}$-invariant word norm on the
group $\mathbf F_n$ is stably unbounded. 

*Proof.* The generating set of the ${\sf Aut}$-invariant word norm
consits of the orbit of a single generator. Such an element is
called *primitive*.

1. Case of $\mathbf F_2=\langle x,y \rangle$: 

	* Observe that every primitive element is a product of up to two
	  palindromes.
	* Let $\xi\colon \mathbf F_2\to \mathbf R$ be a quasimorphism defined as
	  follows. Every reduced word $w(x,y)=\mathbf F_2$ defines a piecewise
horizontal/vertical path on $\mathbf R^2$. The path starts at the origin
and it is a concatenation of horizontal oriented unit intervals (corresponding
to $x^{\pm 1}$ and vertical oriented unit intervals (corresponding to $y^{\pm 1}$.
Then $\xi(w(x,y))$ is defined to be the difference between the right and left
turns made by the path corresponding to $w(x,y)$. It is called the
**snake** quasimorphism. 
	* The snake quasimorphism is unbounded and vanishes on palindromes.
Consequently it is bounded on primitive elements which proves that
the ${\sf Aut}$-word norm is stably unbounded.

2. The general case:
	* An element  $w\in \mathbf F_n$ defines a graph called the Whitehead graph.
If the Whitehead graph of $w$ has a cut vertex then $w$ is primitive.
	* Then


-----

</div>
</label>
<label> <input id="read-more" type="checkbox"> Hamiltonian diffeomorphisms of a symplectic manifold.
  <div id="read-less"> 

-----

Let $(M,\omega)$ be a symplectic manifold. Let $\operatorname{Ham}(M,\omega)$
be the group of compactly supported Hamiltonian diffeomorphisms. This is
is a Frechet-Lie group with the Lie algebra isomorphic to the space
of compactly supported functions on $M$ modulo constant functions. 
It may be equipped with several different norms like the Hofer norm,
the autonomous norm and the maximal word norm.


**Facts:**

* If $M$ is closed then the group $\operatorname{Ham}(M,\omega)$ is simple.
If $M$ is noncompact then the kernel of the Calabi homomorphism
${\sf CAL}\colon {\rm Ham}(M,\omega)\to \mathbf R$ is simple.

* The topology induced by the Hofer norm is *nondiscrete **and** separable*.
The occurence of these two properties at the same time is unusual for
a group of diffeomorphisms. For example, groups of all diffeomorphisms
do not admit nondiscrete norms at all. The group of volume preserving
diffeomorphisms admits a nondiscrete norm ($\operatorname{vol-supp}$)
but its topology is not separable.

* The existence of the nondiscrete norm implies that ${\rm Ham}(M,\omega)$
is not strongly bounded.

-----

  </div> 
</label> 
<label>
  <input id="read-more" type="checkbox"> Heisenberg group.
  <div id="read-less">

-----

Let $H = {\rm N}(3,\mathbf Z)$ be the Heisenberg group of
uppertriangular matrices with integer coefficients.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Hyperbolic groups.
  <div id="read-less">

----

If $H$ is a nonelementary (not virtually cyclic) word hyperbolic group then it
admits an unboounded quasimorphisms
[Epstein-Fujiwara-1994](http://www.math.tohoku.ac.jp/~fujiwara/epstein.ps).
Consequently, $H$ is stably unbounded.

----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> Noncompact simple Lie groups.
  <div id="read-less">

-----

Let $G$ be a noncompact simple Lie group.

**Theorem.** *$G$ is uniformly simple.*


-----


</div>
</label>
<label> <input id="read-more"type="checkbox"> SL(2,Z). 
  <div id="read-less">

-----

${\rm SL}(2,\mathbf Z)$.
This group is **_stably unbounded_**, which follows from the existence of unbounded
quasimorphisms. Indeed, consider its quotient group 
${\rm PSL}(2,\mathbf Z) = \langle a,b\ |\ a^2 = b^3 =1 \rangle$.
This means that every element $g\in {\rm PSL}(2,\mathbf Z)$ can be expressed
uniquely as a product of $a$'s and $b^{\pm 1}$'s.
Let $\psi\colon {\rm PSL}(2,\mathbf Z)\to \mathbf R$ 
be a function such that $\psi(g)$ is the sum of the exponents of $b$'s.  It is
straighforward to check that it is a quasimorphism and that it is unbounded.
Thus ${\rm PSL}(2,\mathbf Z)$ is stably unbounded and so is
${\rm SL}(2,\mathbf Z)$.

-----

</div>
</label>
<label>
  <input id="read-more" type="checkbox"> SL(n,Z) and Chevalley groups.
  <div id="read-less">

-----

${\rm SL}(n,\mathbf Z)$ **for** $n\geq 3$.

**Theorem.** The group ${\rm SL}(n,\mathbf Z)$ is bounded.

The proof has the following steps:

1. ${\rm SL}(n,\mathbf Z)$ is conjugation generated by elementary matrices and
   the associated word norm is bounded. This follows from a stronger property
of being boundedly generated by elementary matrices which was proven by
Carter-Keller.

2. ${\rm SL}(n,\mathbf Z)$ is generated by unit elementary matrices of
   $E_{ij}(\pm 1)_{}$. Let $S$ be the set of all conjugates of the above
elementary matrices.  We shall show that the word metric associated with $S$ is
bounded.  The following identity on the commutators are known as *Steinberg's
relation*:
$$
[E_{ij}(s),E_{jk}(t)]=E_{ik}(st)_{}.
$$ 
In particular, $E_{ik}(s)=[E_{ij}(1),E_{jk}(s)]_{}$ which means that an
elementary matrix is a product ot two generators. Combining this observation
with (1) shows that the word norm associated with $S$ is bounded which proves
boundedness of ${\rm SL}(n,\mathbf Z)$.

*Remark.* This argument works for a general S-arithmetic Chevalley group.
The elementary bounded generation is a result of Tavgen' and the
second part of the argument is similar
[[Gal-Kędra arxiv:1102.0423](http://arxiv.org/abs/1102.0423)].

*Remark.* Bounded generation is inherited by finite index subgroups
and a suitable generalisation of the above argument proves boundedness
for finite index subgroups of S-arithmetics Chevalley groups. In
particular, finite index subgroups of ${\rm SL}(n,\mathbf Z)$, $n\geq 3$
are bounded.


**Theorem.** ${\rm SL}(n,\mathbf Z)$ is not uniformly bounded.

**Theorem.** ${\rm SL}(n,\mathbf Z)$ is strongly bounded.

-----

</div>
</label>

<label>
  <input id="read-more" type="checkbox"> 
  <div id="read-less">
</div>
</label>





<!-- END OF MARKDOWN -->




</body>
</html>
