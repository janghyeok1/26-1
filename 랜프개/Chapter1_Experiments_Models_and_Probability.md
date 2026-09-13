# Probability and Stochastic Processes — Chapter 1: Experiments, Models, and Probability

Roy D. Yates & David J. Goodman, *Probability and Stochastic Processes: A Friendly Introduction for Electrical and Computer Engineers*, Third Edition

---

## Section 1.1 — Applying Set Theory to Probability

- Probability is based on a repeatable experiment that consists of a **procedure** and **observations**.
- An **outcome** is an observation.
- An **event** is a set of outcomes.

### 1.1 Comment: Mutually Exclusive Sets

A collection of sets A₁,…,Aₙ is **mutually exclusive** if and only if
Aᵢ ∩ Aⱼ = ∅, i ≠ j. (1.1)
The word *disjoint* is sometimes used as a synonym for mutually exclusive.

### 1.1 Comment: Collectively Exhaustive Sets

A collection of sets A₁,…,Aₙ is **collectively exhaustive** if and only if
A₁ ∪ A₂ ∪ ⋯ ∪ Aₙ = S. (1.2)

### 1.1 Comment: Partitions

A collection of sets A₁,…,Aₙ is a **partition** if it is both mutually exclusive and collectively exhaustive.

### Example 1.1
**Problem**: Phonesmart offers customers two kinds of smart phones, Apricot (A) and Banana (B). It is possible to buy a Banana phone with an optional external battery E. Apricot customers can buy a phone with an external battery (E) or an extra memory card (C) or both. Draw a Venn diagram that shows the relationship among the items A, B, C and E available to Phonesmart customers.

**Solution**: Since each phone is either Apricot or Banana, A and B form a partition. Since the external battery E is available for both kinds of phones, E intersects both A and B. However, since the memory card C is available only to Apricot customers, C ⊂ A.

### 1.1 Comment: Experiments

An experiment consists of a *procedure* and *observations*. There is uncertainty in what will be observed; otherwise, performing the experiment would be unnecessary. Some examples of experiments:

1. Flip a coin. Did it land with heads or tails facing up?
2. Walk to a bus stop. How long do you wait for the arrival of a bus?
3. Give a lecture. How many students are seated in the fourth row?
4. Transmit one of a collection of waveforms over a channel. What waveform arrives at the receiver?
5. Transmit one of a collection of waveforms over a channel. Which waveform does the receiver identify as the transmitted waveform?

### Example 1.2
An experiment consists of the following procedure, observation, and model:
- **Procedure**: Monitor activity at a Phonesmart store.
- **Observation**: Observe which type of phone (Apricot or Banana) the next customer purchases.
- **Model**: Apricots and Bananas are equally likely. The result of each purchase is unrelated to the results of previous purchases.

### Example 1.3
Monitor the Phonesmart store until three customers purchase phones. Observe the sequence of Apricots and Bananas.

### Example 1.4
Monitor the Phonesmart store until three customers purchase phones. Observe the number of Apricots.

### Definition 1.1 — Outcome
An **outcome** of an experiment is any possible observation of that experiment.

### Definition 1.2 — Sample Space
The **sample space** of an experiment is the finest-grain, mutually exclusive, collectively exhaustive set of all possible outcomes.

### Example 1.5
- The sample space in Example 1.2 is S = {a, b} where a is the outcome "Apricot sold," and b is the outcome "Banana sold."
- The sample space in Example 1.3 is
  S = {aaa, aab, aba, abb, baa, bab, bba, bbb} (1.5)
- The sample space in Example 1.4 is S = {0, 1, 2, 3}.

### Definition 1.3 — Event
An **event** is a set of outcomes of an experiment.

### Example 1.6
Observe the number of minutes a customer spends in the Phonesmart store. An outcome T is a nonnegative real number. The sample space is S = {T | T ≥ 0}. The event "the customer stays longer than five minutes" is {T | T > 5}.

### Example 1.7
Monitor three customers in the Phonesmart store. Classify the behavior as buying (b) if a customer purchases a smartphone. Otherwise the behavior is no purchase (n). An outcome of the experiment is a sequence of three customer decisions, e.g. bnb (first and third buy, second does not). We denote the event that customer i buys a phone by Bᵢ and the event customer i does not buy a phone by Nᵢ. The event B₂ = {nbn, nbb, bbn, bbb}. We can also express an outcome as an intersection of events Bᵢ and Nⱼ — for example the outcome bnb = B₁N₂B₃.

### Quiz 1.1
Monitor three consecutive packets going through an Internet router. Based on the packet header, each packet can be classified as either video (v) if it was sent from a Youtube server or as ordinary data (d). Your observation is a sequence of three letters (each letter is either v or d). For example, two video packets followed by one data packet corresponds to vvd. Write the elements of the following sets:
A₁ = {second packet is video}, B₁ = {second packet is data},
A₂ = {all packets are the same}, B₂ = {video and data alternate},
A₃ = {one or more video packets}, B₃ = {two or more data packets}.
For each pair of events A₁ and B₁, A₂ and B₂, and so on, identify whether the pair of events is either mutually exclusive or collectively exhaustive or both.

---

## Section 1.2 — Probability Axioms

- A probability model assigns a number between 0 and 1 to every event.
- The probability of the union of mutually exclusive events is the sum of the probabilities of the events in the union.

### Definition 1.4 — Axioms of Probability
A probability measure P[·] is a function that maps events in the sample space to real numbers such that:
- **Axiom 1**: For any event A, P[A] ≥ 0.
- **Axiom 2**: P[S] = 1.
- **Axiom 3**: For any countable collection A₁, A₂, … of mutually exclusive events, P[A₁ ∪ A₂ ∪ ⋯] = P[A₁] + P[A₂] + ⋯.

### Theorem 1.1
For mutually exclusive events A₁ and A₂, P[A₁ ∪ A₂] = P[A₁] + P[A₂].

### Theorem 1.2
If A = A₁ ∪ A₂ ∪ ⋯ ∪ Aₘ and Aᵢ ∩ Aⱼ = ∅ for i ≠ j, then P[A] = Σᵢ₌₁ᵐ P[Aᵢ].

### Theorem 1.3
The probability measure P[·] satisfies:
(a) P[∅] = 0.
(b) P[Aᶜ] = 1 − P[A].
(c) For any A and B (not necessarily mutually exclusive), P[A ∪ B] = P[A] + P[B] − P[A ∩ B].
(d) If A ⊂ B, then P[A] ≤ P[B].

### Theorem 1.4
The probability of an event B = {s₁, s₂, …, sₘ} is the sum of the probabilities of the outcomes contained in the event:
P[B] = Σᵢ₌₁ᵐ P[{sᵢ}].

**Proof**: Each outcome sᵢ is an event (a set) with the single element sᵢ. Since outcomes by definition are mutually exclusive, B can be expressed as the union of m mutually exclusive sets: B = {s₁} ∪ {s₂} ∪ ⋯ ∪ {sₘ} (1.6), with {sᵢ} ∩ {sⱼ} = ∅ for i ≠ j. Applying Theorem 1.2 with Bᵢ = {sᵢ} yields P[B] = Σᵢ₌₁ᵐ P[{sᵢ}]. (1.7)

### Theorem 1.5
For an experiment with sample space S = {s₁, …, sₙ} in which each outcome sᵢ is equally likely, P[sᵢ] = 1/n, 1 ≤ i ≤ n.

**Proof**: Since all outcomes have equal probability, there exists p such that P[sᵢ] = p for i = 1,…,n. Theorem 1.4 implies P[S] = P[s₁] + ⋯ + P[sₙ] = np. (1.8) Since Axiom 2 says P[S] = 1, p = 1/n.

### Example 1.8
**Problem**: Roll a six-sided die in which all faces are equally likely. What is the probability of each outcome? Find the probabilities of the events: "Roll 4 or higher," "Roll an even number," and "Roll the square of an integer."

**Solution**: The probability of each outcome is P[i] = 1/6 for i = 1,2,…,6.
- P[Roll 4 or higher] = P[4] + P[5] + P[6] = 1/2.
- P[Roll an even number] = P[2] + P[4] + P[6] = 1/2.
- P[Roll the square of an integer] = P[1] + P[4] = 1/3.

### Quiz 1.2
A student's test score T is an integer between 0 and 100 corresponding to the experimental outcomes s₀,…,s₁₀₀. A score of 90 to 100 is an A, 80 to 89 is a B, 70 to 79 is a C, 60 to 69 is a D, and below 60 is a failing grade of F. If all scores between 51 and 100 are equally likely and a score of 50 or less never occurs, find the following probabilities:
(a) P[{s₁₀₀}] (b) P[A] (c) P[F] (d) P[T < 90] (e) P[a C grade or better] (f) P[student passes]

---

## Section 1.3 — Conditional Probability

### Example 1.9
Consider an experiment that consists of testing two integrated circuits (IC chips) that come from the same silicon wafer and observing in each case whether a chip is accepted (a) or rejected (r). The sample space of the experiment is S = {rr, ra, ar, aa}. Let B denote the event that the first chip tested is rejected: B = {rr, ra}. Similarly, let A = {rr, ar} denote the event that the second chip is a failure.

The chips come from a high-quality production line, so the prior probability P[A] is very low. In advance, we are pretty certain that the second circuit will be accepted. However, some wafers become contaminated by dust, and these wafers have a high proportion of defective chips. When the first chip is a reject, the outcome is in event B, and P[A|B], the probability that the second chip will also be rejected, is higher than the a priori probability P[A] because of the likelihood that dust contaminated the entire wafer.

### Definition 1.5 — Conditional Probability
The conditional probability of the event A given the occurrence of the event B is
P[A|B] = P[AB] / P[B].

### Theorem 1.6
A conditional probability measure P[A|B] has the following properties that correspond to the axioms of probability:
- Axiom 1: P[A|B] ≥ 0.
- Axiom 2: P[B|B] = 1.
- Axiom 3: If A = A₁ ∪ A₂ ∪ ⋯ with Aᵢ ∩ Aⱼ = ∅ for i ≠ j, then P[A|B] = P[A₁|B] + P[A₂|B] + ⋯

### Example 1.10
**Problem**: With respect to Example 1.9, consider the a priori probability model
P[rr] = 0.01, P[ra] = 0.01, P[ar] = 0.01, P[aa] = 0.97. (1.9)
Find the probability of A = "second chip rejected" and B = "first chip rejected." Also find the conditional probability that the second chip is a reject given that the first chip is a reject.

**Solution**: A is the union of two mutually exclusive outcomes rr and ar, so P[A] = P[rr] + P[ar] = 0.02 (1.10). This is also the a priori probability that the first chip is rejected: P[B] = P[rr] + P[ra] = 0.02 (1.11). The conditional probability of the second chip being rejected given that the first chip is rejected is, by definition, the ratio of P[AB] to P[B], where P[AB] = P[both rejected] = P[rr] = 0.01 (1.12). Thus P[A|B] = P[AB]/P[B] = 0.01/0.02 = 0.5 (1.13). The information that the first chip is a reject drastically changes our state of knowledge about the second chip. We started with near certainty, P[A] = 0.02, that the second chip would not fail and ended with complete uncertainty about the quality of the second chip, P[A|B] = 0.5.

### Example 1.11
**Problem**: Roll two fair four-sided dice. Let X₁ and X₂ denote the number of dots that appear on die 1 and die 2, respectively. Let A be the event X₁ ≥ 2. What is P[A]? Let B denote the event X₂ > X₁. What is P[B]? What is P[A|B]?

**Solution**: The sample space has 16 elements corresponding to the four possible values of X₁ and the same four values of X₂. Since the dice are fair, the outcomes are equally likely, each with probability 1/16. The event A (rectangle) contains 12 outcomes, each with probability 1/16, so P[A] = 12/16 = 3/4. The event B (triangle) contains six outcomes, so P[B] = 6/16 = 3/8. The event AB has three outcomes, (2,3),(2,4),(3,4), so P[AB] = 3/16. From the definition of conditional probability,
P[A|B] = P[AB]/P[B] = 1/2. (1.14)
We can also derive this fact from the diagram by restricting our attention to the six outcomes in B and noting that three of the six outcomes in B (one-half of the total) are also in A.

### Quiz 1.3
Monitor three consecutive packets going through an Internet router. Classify each one as either video (v) or data (d). Your observation is a sequence of three letters (each one is either v or d). For example, three video packets corresponds to vvv. The outcomes vvv and ddd each have probability 0.2 whereas each of the other outcomes vvd, vdv, vdd, dvv, dvd, and ddv has probability 0.1. Count the number of video packets Nᵥ in the three packets you have observed. Describe in words and also calculate the following probabilities:
(a) P[Nᵥ = 2] (b) P[Nᵥ ≥ 1] (c) P[{vvd}|Nᵥ = 2] (d) P[{ddv}|Nᵥ = 2] (e) P[Nᵥ = 2|Nᵥ ≥ 1] (f) P[Nᵥ ≥ 1|Nᵥ = 2]

---

## Section 1.4 — Partitions and the Law of Total Probability

- A partition divides the sample space into mutually exclusive sets.

### Example 1.12
**Problem**: Flip four coins, a penny, a nickel, a dime, and a quarter. Examine the coins in order (penny, then nickel, then dime, then quarter) and observe whether each coin shows a head (h) or a tail (t). What is the sample space? How many elements are in the sample space?

**Solution**: The sample space consists of 16 four-letter words, with each letter either h or t. For example, the outcome tthh refers to the penny and the nickel showing tails and the dime and quarter showing heads. There are 16 members of the sample space.

### Example 1.13
Continuing Example 1.12, let Bᵢ = {outcomes with i heads}. Each Bᵢ is an event containing one or more outcomes. For example,
B₁ = {ttth, ttht, thtt, httt}
contains four outcomes. The set B = {B₀, B₁, B₂, B₃, B₄} is a **partition**. Its members are mutually exclusive and collectively exhaustive. It is not a sample space because it lacks the finest-grain property. Learning that an experiment produces an event B₁ tells you that one coin came up heads, but it doesn't tell you which coin it was.

### Figure 1.1
In this example of Theorem 1.7, the partition is B = {B₁, B₂, B₃, B₄} and Cᵢ = A ∩ Bᵢ for i = 1,…,4. It should be apparent that A = C₁ ∪ C₂ ∪ C₃ ∪ C₄.

### Theorem 1.7
For a partition B = {B₁, B₂, …} and any event A in the sample space, let Cᵢ = A ∩ Bᵢ. For i ≠ j, the events Cᵢ and Cⱼ are mutually exclusive and
A = C₁ ∪ C₂ ∪ ⋯.

### Example 1.14
In the coin-tossing experiment of Example 1.12, let A equal the set of outcomes with less than three heads:
A = {tttt, httt, thtt, ttht, ttth, hhtt, htht, htth, tthh, thth, thht}. (1.15)
From Example 1.13, let Bᵢ = {outcomes with i heads}. Since {B₀,…,B₄} is a partition, Theorem 1.7 states that
A = (A ∩ B₀) ∪ (A ∩ B₁) ∪ (A ∩ B₂) ∪ (A ∩ B₃) ∪ (A ∩ B₄) (1.16)
In this example, Bᵢ ⊂ A for i = 0,1,2, so A ∩ Bᵢ = Bᵢ for i = 0,1,2. Also, for i = 3 and i = 4, A ∩ Bᵢ = ∅ so that A = B₀ ∪ B₁ ∪ B₂, a union of mutually exclusive sets. In words, the event "less than three heads" is the union of events "zero heads," "one head," and "two heads."

### Theorem 1.8
For any event A, and partition {B₁, B₂, …, Bₘ},
P[A] = Σᵢ₌₁ᵐ P[A ∩ Bᵢ].

**Proof**: The proof follows directly from Theorem 1.7 and Theorem 1.2. In this case, the mutually exclusive sets are Cᵢ = {A ∩ Bᵢ}.

### Example 1.15
A company has a model of email use. It classifies all emails as either long (l), if they are over 10 MB in size, or brief (b). It also observes whether the email is just text (t), has attached images (i), or has an attached video (v). The sample space has six outcomes: S = {lt, bt, li, bi, lv, bv}. Using L for the event that an email is long and B for the event that an email is brief, {L, B} is a partition. Similarly, {T, I, V} is a partition. The sample space can be represented by a table:

|   | T | I | V |
|---|---|---|---|
| L | 0.3 | 0.12 | 0.15 |
| B | 0.2 | 0.08 | 0.15 |

(1.17)

For example, P[bi] = P[BI] = 0.08. Thus we can apply Theorem 1.8 to find the probability of a long email: P[L] = P[LT] + P[LI] + P[LV] = 0.57. (1.18)

### Theorem 1.9 — Law of Total Probability
For a partition {B₁, B₂, …, Bₘ} with P[Bᵢ] > 0 for all i,
P[A] = Σᵢ₌₁ᵐ P[A|Bᵢ] P[Bᵢ].

**Proof**: This follows from Theorem 1.8 and the identity P[ABᵢ] = P[A|Bᵢ]P[Bᵢ], which is a direct consequence of the definition of conditional probability.

### Example 1.16
**Problem**: A company has three machines B₁, B₂, and B₃ making 1 kΩ resistors. Resistors within 50 Ω of the nominal value are considered acceptable. It has been observed that 80% of the resistors produced by B₁ and 90% of the resistors produced by B₂ are acceptable. The percentage for machine B₃ is 60%. Each hour, machine B₁ produces 3000 resistors, B₂ produces 4000 resistors, and B₃ produces 3000 resistors. All of the resistors are mixed together at random in one bin and packed for shipment. What is the probability that the company ships an acceptable resistor?

**Solution**: Let A = {resistor is acceptable}. P[A|B₁] = 0.8, P[A|B₂] = 0.9, P[A|B₃] = 0.6. (1.19) The production figures state that 3000+4000+3000 = 10,000 resistors per hour are produced. P[B₁] = 0.3, P[B₂] = 0.4, P[B₃] = 0.3. Applying the law of total probability:
P[A] = P[A|B₁]P[B₁] + P[A|B₂]P[B₂] + P[A|B₃]P[B₃] = (0.8)(0.3) + (0.9)(0.4) + (0.6)(0.3) = 0.78. (1.20)
For the whole factory, 78% of resistors are within 50 Ω of the nominal value.

### Theorem 1.10 — Bayes' theorem
P[B|A] = P[A|B] P[B] / P[A].

### Example 1.17
**Problem**: In Example 1.16 about a shipment of resistors from the factory, we learned that: the probability that a resistor is from machine B₃ is P[B₃] = 0.3; the probability that a resistor is acceptable is P[A] = 0.78; given that a resistor is from machine B₃, the conditional probability that it is acceptable is P[A|B₃] = 0.6. What is the probability that an acceptable resistor comes from machine B₃?

**Solution**: Using Bayes' theorem, P[B₃|A] = P[A|B₃]P[B₃] / P[A]. (1.23) P[B₃|A] = (0.6)(0.3)/(0.78) = 0.23. (1.24) Similarly we obtain P[B₁|A] = 0.31 and P[B₂|A] = 0.46. Of all resistors within 50 Ω of the nominal value, only 23% come from machine B₃ (even though this machine produces 30% of all resistors). Machine B₁ produces 31% of the resistors that meet the 50 Ω criterion and machine B₂ produces 46% of them.

### Quiz 1.4
Monitor customer behavior in the Phonesmart store. Classify the behavior as buying (B) if a customer purchases a smartphone. Otherwise the behavior is no purchase (N). Classify the time a customer is in the store as long (L) if the customer stays more than three minutes; otherwise classify the amount of time as rapid (R). Based on experience with many customers, we use the probability model P[N] = 0.7, P[L] = 0.6, P[NL] = 0.35. Find the following probabilities:
(a) P[B ∪ L] (b) P[N ∪ L] (c) P[N ∪ B] (d) P[LR]

---

## Section 1.5 — Independence

- Two events are independent if observing one event does not change the probability of observing the other event.

### Definition 1.6 — Two Independent Events
Events A and B are **independent** if and only if
P[AB] = P[A] P[B].

### 1.5 Comment: Independent vs. Mutually Exclusive
Independent and mutually exclusive are **not synonyms**. Mutually exclusive events A and B have no outcomes in common and therefore P[AB] = 0. In most situations independent events are not mutually exclusive! Exceptions occur only when P[A] = 0 or P[B] = 0. Knowledge that events A and B are mutually exclusive is very helpful — Axiom 3 enables us to *add* their probabilities to obtain the probability of the union. Knowledge that events C and D are independent is also very useful — Definition 1.6 enables us to *multiply* their probabilities to obtain the probability of the intersection.

### Example 1.18
**Problem**: Suppose that for the experiment monitoring three purchasing decisions in Example 1.7, each outcome (a sequence of three decisions, each either buy or not buy) is equally likely. Are the events B₂ that the second customer purchases a phone and N₂ that the second customer does not purchase a phone independent? Are the events B₁ and B₂ independent?

**Solution**: Each element of S = {bbb, bbn, bnb, bnn, nbb, nbn, nnb, nnn} has probability 1/8. B₂ = {bbb, bbn, nbb, nbn} and N₂ = {bnb, bnn, nnb, nnn} (1.26) each contain four outcomes, so P[B₂] = P[N₂] = 4/8. However, B₂ ∩ N₂ = ∅ and P[B₂N₂] = 0. Since P[B₂N₂] ≠ P[B₂]P[N₂], B₂ and N₂ are **not** independent. Learning whether or not B₂ occurs drastically affects our knowledge of whether or not N₂ occurs. Each of the events B₁ = {bnn, bnb, bbn, bbb} and B₂ = {bbn, bbb, nbn, nbb} has four outcomes, so P[B₁] = P[B₂] = 1/2. The intersection B₁ ∩ B₂ = {bbn, bbb} has probability P[B₁B₂] = 2/8 = 1/4. Since P[B₁B₂] = P[B₁]P[B₂], events B₁ and B₂ **are** independent. Learning whether or not B₂ occurs does not affect our knowledge of whether or not B₁ occurs.

### Example 1.19
**Problem**: Integrated circuits undergo two tests. A mechanical test determines whether pins have the correct spacing, and an electrical test checks the relationship of outputs to inputs. We *assume* that electrical failures and mechanical failures occur independently. Mechanical failures occur with probability 0.05 and electrical failures occur with probability 0.2. What is the probability model of an experiment that consists of testing an integrated circuit and observing the results of the mechanical and electrical tests?

**Solution**: The sample space contains four outcomes: S = {(ma,ea),(ma,er),(mr,ea),(mr,er)} (1.27) where m denotes mechanical, e denotes electrical, a denotes accept, and r denotes reject. Let M and E denote the events that the mechanical and electrical tests are acceptable. P[Mᶜ] = 0.05, P[Eᶜ] = 0.2, so P[M] = 0.95 and P[E] = 0.8. Using independence:
P[(ma,ea)] = P[ME] = P[M]P[E] = 0.95×0.8 = 0.76, (1.28)
P[(ma,er)] = P[MEᶜ] = P[M]P[Eᶜ] = 0.95×0.2 = 0.19, (1.29)
P[(mr,ea)] = P[MᶜE] = P[Mᶜ]P[E] = 0.05×0.8 = 0.04, (1.30)
P[(mr,er)] = P[MᶜEᶜ] = P[Mᶜ]P[Eᶜ] = 0.05×0.2 = 0.01. (1.31)

### Definition 1.7 — Three Independent Events
A₁, A₂, and A₃ are **mutually independent** if and only if:
(a) A₁ and A₂ are independent,
(b) A₂ and A₃ are independent,
(c) A₁ and A₃ are independent,
(d) P[A₁ ∩ A₂ ∩ A₃] = P[A₁]P[A₂]P[A₃].

### Example 1.20
**Problem**: In an experiment with equiprobable outcomes, the partition is S = {1,2,3,4}, P[s] = 1/4 for all s ∈ S. Are the events A₁ = {1,3,4}, A₂ = {2,3,4}, and A₃ = ∅ mutually independent?

**Solution**: These three sets satisfy the final condition of Definition 1.7 because A₁ ∩ A₂ ∩ A₃ = ∅, and P[A₁∩A₂∩A₃] = P[A₁]P[A₂]P[A₃] = 0. (1.32) However, A₁ and A₂ are **not** independent because, with all outcomes equiprobable, P[A₁∩A₂] = P[{3,4}] = 1/2 ≠ P[A₁]P[A₂] = 3/4×3/4. (1.33) Hence the three events are **not** mutually independent.

### Definition 1.8 — More than Two Independent Events
If n ≥ 3, the events A₁, A₂, …, Aₙ are **mutually independent** if and only if:
(a) all collections of n−1 events chosen from A₁, A₂, …Aₙ are mutually independent,
(b) P[A₁ ∩ A₂ ∩ ⋯ ∩ Aₙ] = P[A₁]P[A₂]⋯P[Aₙ].

### Quiz 1.5
Monitor two consecutive packets going through a router. Classify each one as video (v) if it was sent from a Youtube server or as ordinary data (d) otherwise. Your observation is a sequence of two letters (either v or d). For example, two video packets corresponds to vv. The two packets are independent and the probability that any one of them is a video packet is 0.8. Denote the identity of packet i by Cᵢ. If packet i is a video packet, then Cᵢ = v; otherwise, Cᵢ = d. Count the number Nᵥ of video packets in the two packets you have observed. Determine whether the following pairs of events are independent:
(a) {Nᵥ = 2} and {Nᵥ ≥ 1} (b) {Nᵥ ≥ 1} and {C₁ = v} (c) {C₂ = v} and {C₁ = d} (d) {C₂ = v} and {Nᵥ is even}

---

*End of Chapter 1*
