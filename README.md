# Hatschi

**Hatschi** (cutesy german way of saying "bless you") is an application that
automatically tracks respiratory symptoms of the cold, the flu or COVID-19 in
particular. It automatically assesses these symptoms through usage of a
microphone and gives the user a statistical overview of the amount of symptoms
shown throughout the day. That data is furthermore used to give health
recommendations to the user, i.e. to stay at home or to get tested for COVID-19.

Try it out [**here**](https://markusthoemmes.github.io/hatschi/).

**Note:** The application doesn't actually detect coughs yet (see explanation
below). You can say "three" to make it count "coughs" though.

## The idea

We cough, sneeze and sniff subconsciously throughout the day. Sometimes we don't
even know if we're healthy or sick. We might feel healthy but actually we're a
walking germ-bomb. This application puts an end to that and tracks your
respiratory symptoms throughout the entire day. It's meant to run in the
background and go unnoticed. Based on the data it gathers, it's able to tell if
you're healthy (having a very low symptom count), kinda unhealthy or if you
should go see a doctor immediately. This is especially important in the impeding
COVID-19 outbreak but not necessarily limited to it at all. It could be used in
a day-to-day office setting as well, where it would prevent workers from being
in the office if they are infectuous.

Moreover, we can also qualitatively analyze the type of coughs. A dry-cough is
characteristic for COVID-19 for example. We can use our detection to either urge
the user to go to see a doctor or to calm them down by stating that the cough
pattern is not indicative of COVID-19.

### Detecting respiratory symptoms

There is quite a bit of scientific research in this area.

- [**Continuous Sound Collection Using Smartphones and Machine Learning to Measure Cough**](https://www.karger.com/Article/FullText/504666)
- [**The automatic recognition and counting of cough**](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1601963/)
- [**Recognizing bodily noises (ie, not spoken words) [StackExchange Post]**](https://dsp.stackexchange.com/questions/17268/recognizing-bodily-noises-ie-not-spoken-words)
- [**Accurate and Privacy Preserving Cough Sensing using a Low-Cost Microphone**](https://ubicomplab.cs.washington.edu/pdfs/accurate-and.pdf)
- [**MobiCough: Real-Time Cough Detection and Monitoring Using Low-Cost Mob**](https://link.springer.com/chapter/10.1007/978-3-662-49381-6_29)
- [**A prospective multicentre study testing the diagnostic accuracy of an automated cough sound centred analytic system for the identification of common respiratory disorders in children**](https://respiratory-research.biomedcentral.com/articles/10.1186/s12931-019-1046-6)
- [**This AI system listens to coughs to learn where the coronavirus is spreading**](https://thenextweb.com/neural/2020/03/20/this-ai-system-listens-to-coughs-to-learn-where-the-coronavirus-is-spreading/)

Based on this research it should be possible to accurately detect different
respiratory symptoms. Given the shortage of time (the hackathon had 48 hours of
code-time) we went for a Tensorflow.js based approach to make it runnable in the
browser and thus available on mobile and laptop/desktop pcs.

We collected sample data from
[Google Research](https://research.google.com/audioset/dataset/cough.html) and
trained a model to detect coughs. Unfortunately this is where the time
constraint bit us and we had to leave it up to be implemented post-hackathon if
needed. We have a rough idea on how to implement a model now, as can be seen by
the `model` directory in this repository. The model in there is a very crudely
trained model of the spoken words model used in the application (see below)
though. Training a proper cough model would take longer than the deadline
permits at this point.

Currently, the implementation uses a
[Tensorflow.js sample model](https://codelabs.developers.google.com/codelabs/tensorflowjs-audio-codelab/index.html),
that is able to detect spoken words. The word "three" is used as a synonym of a
cough in the current implementation.

## The hackathon process

We started at 0, with a team of 8. We divided the team into a **visualization**
and a **model** team. The former would design and implement the application, get
the statistics and visualize it for the the user. It also implemented any
decision making logic. The model team was responsible for collecting training
data and producing a model to be used in TensorflowJS.

Working in parallel has greatly improved the throughput of our work and we've
been able to make great progress on both fronts, as can be seen in the example
above. We underestimated the interface between a generic Tensorflow model and
TensorflowJS though which at the end was a dealbreaker for not being able to
import the trained model into the application.

---

![](css/wvsv.png)

This app has been created as part of the "WirVsVirus" Hackathon held by the
federal government of Germany to fight the corona virus disease.
