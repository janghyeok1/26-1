# Probability and Stochastic Processes — Chapter 2: Sequential Experiments

Roy D. Yates & David J. Goodman, *Probability and Stochastic Processes: A Friendly Introduction for Electrical and Computer Engineers*, Third Edition

---

## Section 2.1 — Tree Diagrams

- Tree diagrams display the outcomes of the subexperiments in a sequential experiment.
- The labels of the branches are probabilities and conditional experiments.

### Example 2.1
**Problem**: For the resistors of Example 1.16, we used A to denote the event that a randomly chosen resistor is "within 50 Ω of the nominal value" ("acceptable"). We use the notation N ("not acceptable") for the complement of A. The experiment of testing a resistor can be viewed as a two-step procedure: first identify which machine (B₁, B₂, or B₃) produced the resistor; second, find out if the resistor is acceptable. Draw a tree for this sequential experiment. What is the probability of choosing a resistor from machine B₂ that is not acceptable?

**Solution**: The tree has first-level branches B₁ (0.3), B₂ (0.4), B₃ (0.3), each followed by branches A/N with conditional probabilities 0.8/0.2 (B₁), 0.9/0.1 (B₂), 0.6/0.4 (B₃), giving leaf probabilities: B₁A=0.24, B₁N=0.06, B₂A=0.36, B₂N=0.04, B₃A=0.18, B₃N=0.12. To find P[B₂N], start at the left: P[B₂] = 0.4, then move right to B₂N and multiply P[B₂] by P[N|B₂] = 0.1 to obtain P[B₂N] = (0.4)(0.1) = 0.04.

### Example 2.2
**Problem**: Traffic engineers have coordinated the timing of two traffic lights to encourage a run of green lights. With probability 0.8 a driver will find the second light to have the same color as the first. Assuming the first light is equally likely to be red or green, what is the probability P[G₂] that the second light is green? Also, what is P[W], the probability that you wait for at least one of the first two lights? Lastly, what is P[G₁|R₂], the conditional probability of a green first light given a red second light?

**Solution**: Tree: G₁ (0.5) → G₂ (0.8) leaf G₁G₂ = 0.4, → R₂ (0.2) leaf G₁R₂ = 0.1; R₁ (0.5) → G₂ (0.2) leaf R₁G₂ = 0.1, → R₂ (0.8) leaf R₁R₂ = 0.4.
P[G₂] = P[G₁G₂] + P[R₁G₂] = 0.4 + 0.1 = 0.5. (2.1)
The event W that you wait for at least one light is the event that at least one light is red: W = {R₁G₂ ∪ G₁R₂ ∪ R₁R₂} (2.2). P[W] = P[R₁G₂] + P[G₁R₂] + P[R₁R₂] = 0.1 + 0.1 + 0.4 = 0.6 (2.3). Alternatively, W is the complement of the event that both lights are green: P[W] = P[(G₁G₂)ᶜ] = 1 − P[G₁G₂] = 0.6 (2.4). To find P[G₁|R₂], we need P[R₂] = 1 − P[G₂] = 0.5. Since P[G₁R₂] = 0.1,
P[G₁|R₂] = P[G₁R₂]/P[R₂] = 0.1/0.5 = 0.2. (2.5)

### Example 2.3 — The Monty Hall Problem
**Problem**: A new car is hidden behind one of three closed doors while a goat is hidden behind each of the other two doors. Your goal is to select the door that hides the car. You make a preliminary selection and then a final selection: (1) You select a door. (2) The host, Monty Hall (who knows where the car is hidden), opens one of the two doors you didn't select to reveal a goat. (3) Monty then asks you if you would like to switch your selection to the other unopened door. (4) After you make your choice (stay or switch), Monty reveals the prize behind your chosen door. To maximize P[C] of winning the car, is switching (a) a good idea, (b) a bad idea, or (c) makes no difference?

**Solution**: Let doors be numbered 1, 2, 3; suppose you first choose door 1 (WLOG). Let Hᵢ denote the event the car is behind door i, and Rᵢ the event Monty opens door i (revealing a goat). If the car is behind door 1, Monty flips a fair coin to open door 2 or door 3. If behind door 2, Monty opens door 3; if behind door 3, Monty opens door 2. Let C = you win the car, G = you win a goat.

**Switch policy** — tree: H₁ (1/3) → R₂ (1/2) → G, leaf 1/6; H₁ (1/3) → R₃ (1/2) → G, leaf 1/6; H₂ (1/3) → R₃ (1) → C, leaf 1/3; H₃ (1/3) → R₂ (1) → C, leaf 1/3.
P[C] = P[H₂R₃C] + P[H₃R₂C] = 2/3. (2.6)

**Do-not-switch policy** — tree: H₁ (1/3) → R₂ (1/2) → C, leaf 1/6; H₁ (1/3) → R₃ (1/2) → C, leaf 1/6; H₂ (1/3) → R₃ (1) → G, leaf 1/3; H₃ (1/3) → R₂ (1) → G, leaf 1/3.
P[C] = P[H₁R₂C] + P[H₁R₃C] = 1/3.

Thus switching is better: if you don't switch, you win the car only if you initially guessed correctly (probability 1/3). If you switch, you win the car when your initial guess was wrong (probability 2/3).

### Quiz 2.1
In a cellular phone system, a mobile phone must be paged to receive a phone call. However, paging attempts don't always succeed because the mobile phone may not receive the paging signal clearly. Consequently, the system will page a phone up to three times before giving up. If the results of all paging attempts are independent and a single paging attempt succeeds with probability 0.8, sketch a probability tree for this experiment and find the probability P[F] that the phone receives the paging signal clearly.

---

## Section 2.2 — Counting Methods

### Example 2.4
**Problem**: Choose 7 cards at random from a deck of 52 different cards. Display the cards in the order in which you choose them. How many different sequences of cards are possible?

**Solution**: The procedure consists of seven subexperiments. The first has 52 possible outcomes; for each outcome of the first, the second has 51 possible outcomes; and so on. The total number of outcomes is
52 × 51 × ⋯ × 46 = 674,274,182,400. (2.7)

### Theorem 2.1 — Fundamental Principle of Counting
An experiment consists of two subexperiments. If one subexperiment has k outcomes and the other subexperiment has n outcomes, then the experiment has nk outcomes.

### Example 2.5
There are two subexperiments: "Flip a coin and observe either heads H or tails T" and "Roll a six-sided die and observe the number of spots" (six outcomes 1,…,6). The experiment "Flip a coin and roll a die" has 2 × 6 = 12 outcomes: (H,1),(H,2),(H,3),(H,4),(H,5),(H,6),(T,1),(T,2),(T,3),(T,4),(T,5),(T,6).

### Theorem 2.2
The number of k-permutations of n distinguishable objects is
(n)ₖ = n(n−1)(n−2)⋯(n−k+1) = n!/(n−k)!.

### Example 2.6
Suppose there are four objects, A, B, C, and D, and we define an experiment in which the procedure is to choose two objects without replacement, arrange them in alphabetical order, and observe the result. In this case, to observe AD we could choose A first or D first or both A and D simultaneously. The possible outcomes of the experiment are AB, AC, AD, BC, BD, and CD.

### Example 2.7
Suppose there are four objects, A, B, C, and D, and we define an experiment in which the procedure is to choose two objects without replacement and observe the result. The 12 possible outcomes of the experiment are AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB, and DC.

### Theorem 2.3
The number of ways to choose k objects out of n distinguishable objects is
(n choose k) = (n)ₖ / k! = n! / (k!(n−k)!).

### Definition 2.1 — n choose k
For an integer n ≥ 0, we define
(n choose k) = n!/(k!(n−k)!) for k = 0,1,…,n, and 0 otherwise.

### Example 2.8
- The number of combinations of seven cards chosen from a deck of 52 cards is
  (52 choose 7) = (52×51×⋯×46)/(2×3×⋯×7) = 133,784,560 (2.11)
  which is the number of 7-combinations of 52 objects. By contrast, Example 2.4 found 674,274,182,400 7-permutations of 52 objects (the ratio is 7! = 5040).
- There are 11 players on a basketball team. The starting lineup consists of five players. There are (11 choose 5) = 462 possible starting lineups.
- There are (120 choose 60) ≈ 10³⁶ ways of dividing 120 students enrolled in a probability course into two sections with 60 students in each section.
- A baseball team has 15 field players and ten pitchers. Each field player can take any of the eight nonpitching positions. The starting lineup consists of one pitcher and eight field players. Therefore, the number of possible starting lineups is N = (10 choose 1)(15 choose 8) = 64,350. For each choice of starting lineup, the manager must submit a batting order for the 9 starters. The number of possible batting orders is N × 9! = 23,351,328,000, since there are N ways to choose the 9 starters, and for each choice of 9 starters, there are 9! = 362,880 possible batting orders.

### Example 2.9
**Problem**: There are four queens in a deck of 52 cards. You are given seven cards at random from the deck. What is the probability that you have no queens?

**Solution**: The sample space contains H = (52 choose 7) possible combinations of seven cards, each with probability 1/H. There are H_NQ = (48 choose 7) combinations with no queens. The probability of receiving no queens is the ratio H_NQ/H = 0.5504.

Alternatively, analyze as a sequence of seven subexperiments. The first subexperiment: select a card at random and observe whether it is a queen — probability 4/52 of being a queen, else stop looking for queens with probability 48/52. Otherwise, with probability 48/52, select another card from the remaining 51 and observe whether it is a queen — outcome probability 4/51 for a queen or 47/51 for no queen — continue until you select a queen or you have seven cards with no queen. The probability of the event N₇ that no queen is received in your seven cards is the product of the probabilities of the branches leading to N₇:
(48/52) × (47/51) ⋯ × (42/46) = 0.5504. (2.12)

### Example 2.10
**Problem**: There are four queens in a deck of 52 cards. You are given seven cards at random from the deck. After receiving each card you return it to the deck and receive another card at random. Observe whether you have not received any queens among the seven cards you were given. What is the probability that you have received no queens?

**Solution**: The sample space contains 52⁷ outcomes. There are 48⁷ outcomes with no queens. The ratio is (48/52)⁷ = 0.5710, the probability of receiving no queens. If this experiment is considered as a sequence of seven subexperiments, the tree looks the same as the tree in Example 2.9, except that all the horizontal branches have probability 48/52 and all the diagonal branches have probability 4/52.

### Theorem 2.4
Given m distinguishable objects, there are mⁿ ways to choose with replacement an ordered sample of n objects.

### Example 2.11
There are 2¹⁰ = 1024 binary sequences of length 10.

### Example 2.12
A chip fabrication facility produces microprocessors. Each microprocessor is tested to determine whether it runs reliably at an acceptable clock speed. A subexperiment to test a microprocessor has sample space S_sub = {0, 1} to indicate whether the test was a failure (0) or a success (1). For test i, we record xᵢ = 0 or xᵢ = 1 to indicate the result. In testing four microprocessors, the observation sequence, x₁x₂x₃x₄, is one of 16 possible outcomes:
S = {0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001, 1010, 1011, 1100, 1101, 1110, 1111}.

### Theorem 2.5
For n repetitions of a subexperiment with sample space S_sub = {s₀,…,s_{m−1}} the sample space S of the sequential experiment has mⁿ outcomes.

### Example 2.13
There are ten students in a probability class; each earns a grade s ∈ S_sub = {A, B, C, F}. We use the notation xᵢ to denote the grade of the ith student. For example, the grades for the class could be
x₁x₂⋯x₁₀ = CBBACFBACF (2.13)
The sample space S of possible sequences contains 4¹⁰ = 1,048,576 outcomes.

### Example 2.14
**Problem**: For five subexperiments with sample space S_sub = {0,1}, what is the number of observation sequences in which 0 appears n₀ = 2 times and 1 appears n₁ = 3 times?

**Solution**: The 10 five-letter words with 0 appearing twice and 1 appearing three times are:
{00111, 01011, 01101, 01110, 10011, 10101, 10110, 11001, 11010, 11100}.

### Theorem 2.6
The number of observation sequences for n subexperiments with sample space S = {0, 1} with 0 appearing n₀ times and 1 appearing n₁ = n − n₀ times is (n choose n₁).

### Theorem 2.7
For n repetitions of a subexperiment with sample space S = {s₀,…,s_{m−1}}, the number of length n = n₀ + ⋯ + n_{m−1} observation sequences with sᵢ appearing nᵢ times is
(n choose n₀,…,n_{m−1}) = n! / (n₀!n₁!⋯n_{m−1}!).

**Proof**: Let M = (n choose n₀,…,n_{m−1}). Start with n empty slots and perform a sequence of subexperiments: subexperiment 0 labels n₀ slots as s₀; subexperiment 1 labels n₁ of the remaining slots as s₁; …; subexperiment m−1 labels the remaining n_{m−1} slots as s_{m−1}. There are (n choose n₀) ways to perform subexperiment 0. After n₀ slots have been labeled, there are (n−n₀ choose n₁) ways to perform subexperiment 1. After subexperiment j−1, n₀+⋯+n_{j−1} slots have already been filled, leaving (n−(n₀+⋯+n_{j−1}) choose nⱼ) ways to perform subexperiment j. From the fundamental counting principle,
M = (n choose n₀)(n−n₀ choose n₁)(n−n₀−n₁ choose n₂)⋯(n−n₀−⋯−n_{m−2} choose n_{m−1}) (2.14)
Canceling the common factors yields the formula of the theorem.

### Definition 2.2 — Multinomial Coefficient
For an integer n ≥ 0, we define
(n choose n₀,…,n_{m−1}) = n!/(n₀!n₁!⋯n_{m−1}!) when n₀+⋯+n_{m−1} = n and nᵢ ∈ {0,1,…,n}, i = 0,…,m−1, and 0 otherwise.

### Example 2.15
**Problem**: In Example 2.13, the professor uses a curve in determining student grades. When there are ten students in a probability class, the professor always issues two grades of A, three grades of B, three grades of C and two grades of F. How many different ways can the professor assign grades to the ten students?

**Solution**: With four possible grades there are 4¹⁰ = 1,048,576 ways of assigning grades to ten students. However, now we are limited to choosing n₀ = 2 students to receive an A, n₁ = 3 students to receive a B, n₂ = 3 students to receive a C, and n₃ = 4 students to receive an F [note: the numbers given (2,3,3,2) are used in the formula]. The number of ways that fit the curve is the multinomial coefficient
(10 choose 2,3,3,2) = 10!/(2!3!3!2!) = 25,200. (2.16)

### Quiz 2.2
Consider a binary code with 4 bits (0 or 1) in each code word. An example of a code word is 0110.
(a) How many different code words are there?
(b) How many code words have exactly two zeroes?
(c) How many code words begin with a zero?
(d) In a constant-ratio binary code, each code word has N bits. In every word, M of the N bits are 1 and the other N − M bits are 0. How many different code words are in the code with N = 8 and M = 3?

---

## Section 2.3 — Independent Trials

- Independent trials are identical experiments in a sequential experiment.

### Example 2.16
**Problem**: What is the probability P[E₂,₃] of two failures and three successes in five independent trials with success probability p?

**Solution**: The outcomes with three successes in five trials are 11100, 11010, 11001, 10110, 10101, 10011, 01110, 01101, 01011, and 00111. The probability of each outcome is a product of five probabilities, each related to one subexperiment. In outcomes with three successes, three of the probabilities are p and the other two are 1−p, so each outcome with three successes has probability (1−p)²p³. From Theorem 2.6, the number of such sequences is (5 choose 3). To find P[E₂,₃], add up the probabilities associated with the 10 outcomes with 3 successes, yielding
P[E₂,₃] = (5 choose 3)(1−p)²p³. (2.17)

### Theorem 2.8
The probability of n₀ failures and n₁ successes in n = n₀ + n₁ independent trials is
P[E_{n₀,n₁}] = (n choose n₁)(1−p)^(n−n₁) p^(n₁) = (n choose n₀)(1−p)^(n₀) p^(n−n₀).

### Example 2.17
**Problem**: In Example 1.16, we found that a randomly tested resistor was acceptable with probability P[A] = 0.78. If we randomly test 100 resistors, what is the probability of Tᵢ, the event that i resistors test acceptable?

**Solution**: Testing each resistor is an independent trial with a success occurring when a resistor is acceptable. Thus for 0 ≤ i ≤ 100,
P[Tᵢ] = (100 choose i)(0.78)ⁱ(1−0.78)^(100−i) (2.18)
Intuition says that since 78% of the resistors are acceptable, the number acceptable in 100 trials should be near 78. However, P[T₇₈] ≈ 0.096, which is fairly small. This shows that although we might expect the number acceptable to be close to 78, that does not mean that the probability of exactly 78 acceptable is high.

### Theorem 2.9
A subexperiment has sample space S_sub = {s₀,…,s_{m−1}} with P[sᵢ] = pᵢ. For n = n₀+⋯+n_{m−1} independent trials, the probability of nᵢ occurrences of sᵢ, i = 0,1,…,m−1, is
P[E_{n₀,…,n_{m−1}}] = (n choose n₀,…,n_{m−1}) p₀^(n₀) ⋯ p_{m−1}^(n_{m−1}).

### Example 2.18
A packet processed by an Internet router carries either audio information with probability 7/10, video, with probability 2/10, or text with probability 1/10. Let E_{a,v,t} denote the event that the router processes a audio packets, v video packets, and t text packets in a sequence of 100 packets. In this case,
P[E_{a,v,t}] = (100 choose a,v,t) (7/10)ᵃ (2/10)ᵛ (1/10)ᵗ (2.23)
Keep in mind that by the extended definition of the multinomial coefficient, P[E_{a,v,t}] is nonzero only if a+v+t = 100 and a, v, and t are nonnegative integers.

### Quiz 2.3
Data packets containing 100 bits are transmitted over a communication link. A transmitted bit is received in error (either a 0 sent is mistaken for a 1, or a 1 sent is mistaken for a 0) with probability ε = 0.01, independent of the correctness of any other bit. The packet has been coded in such a way that if three or fewer bits are received in error, then those bits can be corrected. If more than three bits are received in error, then the packet is decoded with errors.
(a) Let E_{k,100−k} denote the event that a received packet has k bits in error and 100−k correctly decoded bits. What is P[E_{k,100−k}] for k = 0,1,2,3?
(b) Let C denote the event that a packet is decoded correctly. What is P[C]?

---

*End of Chapter 2*
