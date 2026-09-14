# Linear Algebra — Lecture 1: Vectors and Matrices

Hyang-Won Lee, Dept. of Computer Science and Engineering, Konkuk University

---

## What is Linear Algebra?

- The branch of mathematics concerning **linear equations**, **linear functions**, and their representations through **vectors and matrices**.

## Vectors

- A vector is an ordered list of numbers, written as a **column vector**:

  v = [v1, v2, ..., vn]^T  (n×1)

  or equivalently as a **row vector** v^T = [v1, v2, ..., vn].
- The set of all n-dimensional real vectors is denoted **ℝⁿ**.

### Visualization of a Vector

- A vector can be visualized as an arrow (directed line segment) from the origin to the point given by its coordinates in space (e.g., in ℝ² or ℝ³).

## Operations on Vectors

- **Addition**: for v = [v1, ..., vn]^T and w = [w1, ..., wn]^T,

  v + w = [v1+w1, v2+w2, ..., vn+wn]^T

- **Scalar multiplication**: for a scalar c,

  cv = [c·v1, c·v2, ..., c·vn]^T

- **Linear combination**: given scalars c, d and vectors v, w,

  cv + dw

### Visualization of Operations

- (Addition, scalar multiplication, and linear combinations can each be visualized geometrically in the plane.)

## Linear Combinations

- **Example 1**: c[1,0]^T + d[0,1]^T — as c and d range over all real numbers, this linear combination can reach **any point in ℝ²** (since [1,0] and [0,1] span the plane).
- **Example 2**: c[1,1]^T + d[2,2]^T — since [2,2] = 2[1,1], both vectors point along the same line, so this linear combination can only reach points **on that single line** through the origin (it does not span ℝ²).

## Lengths and Inner (Dot) Products

- **Inner (dot) product** of v = [v1,...,vn]^T and w = [w1,...,wn]^T:

  v · w = Σ (i=1 to n) vi·wi

- **Length (l2-norm)** of a vector v:

  ||v|| = sqrt(v · v) = sqrt(Σ vi²)

- **Properties of ||·||** (norm properties):
  1. ||v|| ≥ 0, and ||v|| = 0 if and only if v = 0
  2. ||cv|| = |c| · ||v||
  3. ||v + w|| ≤ ||v|| + ||w|| (triangle inequality)
  4. (positivity/homogeneity as above define a norm)

- **Unit vector**: a vector u with ||u|| = 1. Any nonzero vector v can be normalized to a unit vector via v/||v||.

- **Angle between two vectors**:

  cos θ = (v · w) / (||v|| · ||w||)

## Matrices

- A matrix is a collection of vectors (rows or columns) arranged in a rectangular array.
- An **m×n matrix** A has m rows and n columns; its dimension is written **m×n**.
- The entry in row i, column j is denoted **[A]ij**.
- The set of all m×n real matrices is denoted **ℝ^(m×n)**.
- A **square matrix** is one where m = n (number of rows equals number of columns).

## Functions

- A function f: ℝⁿ → ℝ maps an n-dimensional vector to a real number.
- **Example 1**: f(x1, x2) = x1 + x2
- **Example 2**: f(x1, x2) = x1·x2 (or another sample nonlinear function)

## Linear Equations

- A function f is **linear** if for all vectors x, y and scalars a, b:

  f(ax + by) = a·f(x) + b·f(y)

- **Example system of linear equations**:

  x1 + 3x2 + 4x3 = 2
  x1 + 7x2 − x3 = −1
  x1 + 4x2 + x3 = 5

---

*End of Lecture 1*
