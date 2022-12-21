---
layout: course
name: Data Visualization
year: 2022
semester: Fall
instructors:
  - Dominik Moritz
tas:
  - Ádeep Biswas
  - Fernie Qin
time: T/H 03:05pm-04:25pm
location: HH B103
redirect_from:
  - vis2022

schedule:
- date: 2022-08-30
  title: "Introduction and the Value of Visualization"
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441462
  slides: https://drive.google.com/open?id=14VaF566J0PIWQxhL8vUBzOCVeINwcXWw
  readings:
  - name: Introduction to Vega-Lite
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/introduction-to-vega-lite
  - name: Information Visualization (Chapter 1)
    author: Stuart Card, Jock Mackinlay, and Ben Shneiderman
    year: 1999
    type: pdf
    required: true
    type: pdf
    url: https://drive.google.com/file/d/1-SrBG2PonDK4kPxIr6qaY1quYeyozZ0c
  - name: The Value of Visualization
    author: Jarke van Wijk
    year: 2005
    required: false
    type: pdf
    url: https://drive.google.com/file/d/1-SU83DmAqUdflBjCbmaE00bsDn7evJJE
- date: 2022-09-01
  title: "Sketching"
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441461
  slides: https://drive.google.com/file/d/14a0277ZJn-o-Kh0RymekuTGlMqBboaKl
  due:
  - name: "Assignment 0: Setup Github"
    url: https://canvas.cmu.edu/courses/30777/assignments/508246
  readings:
  - name: Data Types, Graphical Marks, and Visual Encoding Channels
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/data-types-graphical-marks-and-visual-encoding-channels
  - name: The Anatomy of Sketching (Chapter 9)
    author: Bill Buxton
    venue: Sketching User Experiences
    required: true
    type: pdf
    url: https://drive.google.com/file/d/1-1Xlvni3_NFoSiNs8JDuDQV8bFLDuJcj
  - name: Sketching with Data Opens the Mind's Eye
    author: Giorgia Lupi
    required: true
    type: pdf
    url: https://drive.google.com/file/d/1--4iqyEJNSly0arOTpdE9ppotdHSTz9W
  - name: The Shape of My Thoughts
    author: Giorgia Lupi
    venue: Eyeo 2014
    required: false
    type: video
    url: https://vimeo.com/109954123
- date: 2022-09-06
  title: "Data and Image Models"
  slides: https://drive.google.com/open?id=14mttdlLYUPVsbRCGWQSxo8nRsvB7SR6m
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441460
  due:
  - name: "Assignment 1: Sketching Data"
    url: https://canvas.cmu.edu/courses/30777/assignments/508247
  readings:
  - name: Scales, Axes, and Legends
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/scales-axes-and-legends
  - name: "The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations"
    url: https://drive.google.com/file/d/13NseKgMXbwXVqIqxAuZ16xmWJ-8JRA1M
    author: Ben Shneiderman
    year: 1996
    required: true
    venue: IEEE Symposium on Visual Languages
    type: pdf
  - name: "A Tour through the Visualization Zoo"
    url: https://queue.acm.org/detail.cfm?id=1805128
    type: pdf
    year: 2010
    venue: ACM Queue
    author: Jeffrey Heer, Michael Bostock, and Vadim Ogievetsky
- date: 2022-09-08
  title: "Effective Visual Encodings"
  slides: https://drive.google.com/file/d/14rj0_nd8XtIiEkBFWB-sHAQYHMpOOMtG
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441459
  readings:
  - name: Data Transformation
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/data-transformation
  - name: Basic Principles of Visualization (Chapter 5)
    author: Alberto Cairo
    venue: The Truthful Art
    required: true
    type: pdf
    url: https://drive.google.com/open?id=171tAFZLofETfiOm4OElpHcWSlWQ8Yven
- date: 2022-09-13
  title: Exploratory Data Analysis
  slides: https://drive.google.com/file/d/1SDfTXjg3Kj0nfa2KI6tC7ND_jU3_SxS8
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441458
  readings:
  - name: Multi-View Composition
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/multi-view-composition
  - name: "Data analysis and statistics: An expository overview"
    author: "Tukey, Wilk"
    type: pdf
    url: https://drive.google.com/file/d/1-SqSkvMhLHCkUrMGd-we3BAFtG2Xe3YF
    year: 1966
    required: true
  - name: "Voyager: Exploratory Analysis via Faceted Browsing of Visualization Recommendations"
    author: Kanit Wongsuphasawat, Dominik Moritz, Anushka Anand, Jock Mackinlay, Bill Howe, and Jeffrey Heer
    venue: IEEE Transactions on Visualization and Computer Graphics
    year: 2016
    required: false
    type: pdf
    url: https://drive.google.com/file/d/1-dDFEcSHeM-1nlsNskZ1Ni_-GUhuKoTC
  - name: "Polaris: A System for Query, Analysis and Visualization of Multi-dimensional Relational Databases"
    author: Chris Stolte, Diane Tang, and Pat Hanrahan
    venue: IEEE TVCG
    type: pdf
    year: 2002
    url: https://drive.google.com/file/d/1ZMwEHi6d-54OAMfBZkEcF6ttUvr85IQV
- date: 2022-09-15
  title: Transform Data with SQL
  slides: https://drive.google.com/file/d/113F2x8wR1g5gNPpggeZCLwGBTjHhwmmq
  discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441457
  readings:
  - name: Introduction to SQL
    required: true
    type: notebook
    url: https://observablehq.com/@cmudig/introducing-sql-with-duckdb
  - name: "A Relational Model of Data for Large Shared Data Banks"
    author: Edgar F. Codd
    required: true
    type: pdf
    year: 1970
    url: https://drive.google.com/file/d/1AlYklRsLKEOC_3_Y1ssbLoDyTqM6CvFo
- date: 2022-09-20
  title: Interactivity
  slides: https://drive.google.com/file/d/1yLkQwGcfKHnJG8HtExqVWXeLNclu3zwb
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441456
  readings:
  - name: "Interactive Dynamics for Visual Analysis"
    url: https://queue.acm.org/detail.cfm?id=2146416
    type: pdf
    year: 2012
    venue: ACM Queue
    required: true
    author: Jeffrey Heer and Ben Shneiderman
  - name: Interaction
    required: true
    type: notebook
    url: https://observablehq.com/@uwdata/interaction
  - name: "The death of interactive infographics?"
    author: "Dominikus Baur"
    year: 2017
    required: false
    url: https://medium.com/@dominikus/the-end-of-interactive-visualizations-52c585dcafcb
    type: blog
  - name: "In Defense of Interactive Graphics"
    author: "Gregor Aisch"
    year: 2017
    required: false
    url: https://www.vis4.net/blog/2017/03/in-defense-of-interactive-graphics/
    type: blog
- date: 2022-09-22
  title: Visualization Tools
  slides: https://drive.google.com/file/d/1XfPo7t8JIFnGBafw7NRyyEA_Op2sAfFL
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441455
  readings:
  - name: "A Minimal Introduction to JavaScript and Observable."
    note: Read this first if you are new to JavaScript and/or Observable notebooks!
    url: https://observablehq.com/@uwdata/a-minimal-introduction-to-javascript-and-observable
    type: notebook
  - name: "Introduction to D3, Part 1"
    url: https://observablehq.com/@uwdata/introduction-to-d3-part-1
    type: notebook
    required: true
  - name: "D3: Data-Driven Documents"
    author: Michael Bostock, Vadim Ogievetsky, Jeffrey Heer
    venue: IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis)
    year: 2011
    type: pdf
    required: true
    url: https://drive.google.com/file/d/1FH5OzFAF0TMtMM4I7cIrHCS0aDq3VR6p
  - name: " Vega-Lite: A Grammar of Interactive Graphics"
    url: https://www.youtube.com/watch?v=9uaHRWj04D4
    author: Arvind Satyanarayan, Dominik Moritz, Kanit Wongsuphasawat, and Jeffrey Heer
    venue: OpenVis Conf
    year: 2017
    required: false
    type: video
  - name: "Vega-Lite: A Grammar of Interactive Graphics"
    url: https://drive.google.com/file/d/1dYDgsR_XqZQ8CLZUHwmQ4Jue-3GMz8Mr
    author: Arvind Satyanarayan, Dominik Moritz, Kanit Wongsuphasawat, and Jeffrey Heer
    venue: IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis)
    year: 2017
    required: false
    type: pdf
- date: 2022-09-27
  title: D3 Deep Dive
  _slides: https://drive.google.com/file/d/1jNoZoP0JV94Agc97yANifrT4gE4u1qfL
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441454
  readings:
  - name: "Introduction to D3, Part 2"
    url: https://observablehq.com/@uwdata/introduction-to-d3-part-2
    type: notebook
    required: true
- date: 2022-09-29
  title: Final Project Introduction
  slides: https://drive.google.com/file/d/1ciK3J6ldIjK5NvWrwHx15CI5elL_KCdr/view
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441453
  due:
  - name: "Assignment 2: Exploratory Data Analysis"
    url: https://canvas.cmu.edu/courses/30777/assignments/508248
- date: 2022-10-04
  title: Building Interactive Visualization Applications
  readings:
  - name: "Hello Swift Charts"
    url: https://developer.apple.com/wwdc22/10136
    type: video
- date: 2022-10-06
  title: Narrative Visualization
  slides: https://drive.google.com/file/d/1JvKCsXrYUNo_e8yLM2AgyZ4qvtr3hdcr/view
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441452
  readings:
  - name: "Narrative Visualization: Telling Stories with Data"
    url: https://drive.google.com/file/d/1eNlLqJf7Gxphwa7ct4MbendVyoAkpPs8
    author: Edward Segel, Jeffrey Heer
    venue: IEEE Trans. Visualization & Comp. Graphics (Proc. InfoVis)
    year: 2010
    required: true
    type: pdf
  - name: "Storytelling and Science"
    url: https://dl.acm.org/doi/pdf/10.1145/3526100
    author: Titus Barik, Sumit Gulwani, and Mario Juarez
    type: pdf
    year: 2022
  - name: "What to consider when using text in data visualizations"
    author: Lisa Charlotte Muth 
    url: https://blog.datawrapper.de/text-in-data-visualizations/
    type: website
    year: 2022
- date: 2022-10-11
  title: Designing for Perception
  slides: https://drive.google.com/file/d/1POllI65jVNXf6VQj12xurP8W0lj6phXY
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441451
  readings:
  - name: "Layering and Seperation (Chapter 3)"
    url: https://drive.google.com/file/d/1--k-IiRxcYJWADUo9EvthaG8pgTzxwaz
    author: Edward Tufte
    venue: Envisioning Information
    required: true
    type: pdf
  - name: Which color scale to use when visualizing data
    url: https://blog.datawrapper.de/which-color-scale-to-use-in-data-vis/
    author: Lisa Charlotte Muth
    year: 2021
    type: website
    required: true
  - name: What to consider when choosing colors for data visualization
    author: Lisa Charlotte Muth
    year: 2018
    url: https://blog.datawrapper.de/colors/
    type: website
    required: false
- date: 2022-10-13
  title: Ethics in Visualization
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441450
  due:
  - name: "Final Project Proposal"
    url: https://canvas.cmu.edu/courses/30777/assignments/508254
  - name: "Assignment 3: Interactive Visualization"
    url: https://canvas.cmu.edu/courses/30777/assignments/508249
  readings:
  - name: "Ethical Dimensions of Visualization Research"
    url: https://drive.google.com/open?id=1-MtB7C2lG6sdULgShQkQcnQZBngAe1S6
    author: Michael Correll
    venue: "CHI '19: Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems"
    required: true
    type: pdf
  - name: "Introduction"
    url: https://drive.google.com/open?id=1-8SYdSKFBGyn0kLy4N_yjhLsOnx-zPpZ
    author: Catherine D'Ignazio and Lauren F. Klein
    venue: "Data Feminism"
    required: false
    type: pdf
- date: 2022-10-25
  title: Ethical Data Visualization I
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441449
- date: 2022-10-27
  title: Ethical Data Visualization II
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441448
- date: 2022-11-01
  title: Geographic Visualization
  slides: https://drive.google.com/file/d/1PJ56ulVvn_Nce5CPs89hCI40O0i5ih4d/view
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441445
  readings:
  - name: Cartographic Visualization
    url: https://observablehq.com/@uwdata/cartographic-visualization
    type: notebook
    required: true
  - name: What to consider when creating choropleth maps
    type: website
    author: Lisa Charlotte Muth
    required: true
    year: 2018
    url: https://blog.datawrapper.de/choroplethmaps/
- date: 2022-11-03
  title: Network Visualization
  slides: https://drive.google.com/file/d/1W5hwhA_StK0EvDAppdhppKXNMPldv1SQ
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441444
  readings:
  - name: "Chapter 2: Networks"
    url: https://drive.google.com/open?id=10CLJs0yw-r4KF7oaMWPOdNcNjnUTXR8Z
    author: Isabel Meirelles
    venue: "Design for Information"
    required: true
    type: pdf
- date: 2022-11-08
  title: "<i>No Class: Election Day 🗳️</i>"
  due:
  - name: "Final Project Design Review"
    url: https://canvas.cmu.edu/courses/30777/assignments/508249
- date: 2022-11-10
  title: Scalable Visualization
  slides: https://drive.google.com/file/d/19K-3m3CEeAumVYGy0WV9amUxqD0lwa9T/view
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441443
  readings:
  - name: "imMens: Real-time Visual Querying of Big Data"
    author: Zhicheng Liu, Biye Jiang, Jeffrey Heer
    venue: EuroVis
    year: 2013
    required: true
    url: https://idl.cs.washington.edu/files/2013-imMens-EuroVis.pdf
    type: pdf
  - name: "Bin-summarise-smooth: A framework for visualising large data"
    author: Hadley Wickham
    year: 2013
    required: true
    url: https://vita.had.co.nz/papers/bigvis.pdf
    type: pdf
  - name: "Falcon: Balancing Interactive Latency and Resolution Sensitivity for Scalable Linked Visualizations"
    author: Dominik Moritz, Bill Howe, Jeffrey Heer
    venue: ACM CHI
    year: 2019
    url: https://www.domoritz.de/papers/2019-Falcon-CHI.pdf
    type: pdf
- date: 2022-11-15
  title: Accessibility
  slides: https://drive.google.com/open?id=15Key7uKAV9pzAN6vF1qc4rNjrI1wMtWY
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441442
  readings:
  - name: "Sociotechnical Considerations for Accessible Visualization Design"
    url: https://arxiv.org/pdf/1909.05118.pdf
    type: pdf
    author: Alan Lundgard, Crystal Lee, Arvind Satyanarayan
    venue: IEEE VIS
    required: true
    year: 2019
  - name: "Social Model Of Disability"
    url: https://pwd.org.au/resources/disability-info/social-model-of-disability/
    type: video
    required: true
  - name: "Are Your Data Visualizations Excluding People?"
    url: https://youtu.be/SWB-KLXN-Ok?t=1206
    type: video
    required: false
    year: 2021
    author: Frank Elavsky, Larene Le Gassick, Sarah Fossheim
- date: 2022-11-17
  title: Animation
  _slides: https://drive.google.com/file/d/12f3mrAtruVQpjk4F8P00U9u0fqcsEe_e
  _discussion: https://canvas.cmu.edu/courses/30777/discussion_topics/441441
  readings:
  - name: "Effectiveness of Animation in Trend Visualization"
    author: George Robertson, Roland Fernandez, Danyel Fisher, Bongshin Lee, John Stasko
    venue: InfoVis
    year: 2008
    required: true
    type: pdf
    url: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tvcg2008-trendvis.pdf
  - name: Animated Transitions in Statistical Data Graphics
    author: Jeffrey Heer, George Robertson
    venue: IEEE InfoVis
    year: 2007
    type: pdf
    url: https://drive.google.com/file/d/14KUkL6BsDhpKMUPw3vgOS8FDHMjF8TsN/view
- date: 2022-11-22
  title: Visualization and Machine Learning (with Sherry Tongshuang Wu)
  discussion: https://canvas.cmu.edu/courses/24179/discussion_topics/346295
  slides: https://drive.google.com/file/d/1f0OygzawDy8_hf-e--2Kref20FUnB73G/view
  readings:
    - name: "The Myth of the Impartial Machine"
      url: https://parametric.press/issue-01/the-myth-of-the-impartial-machine/
      type: website
      author: Alice Feng, Shuyan Wu
      required: true
      year: 2019
    - name: "The Beginner's Guide to Dimensionality Reduction"
      url: https://dimensionality-reduction-293e465c2a3443e8941b016d.vercel.app/
      type: website
      author: Matthew Conlen, Fred Hohman
      required: true
      year: 2018
    - name: "Gamut: A Design Probe to Understand How Data Scientists Understand Machine Learning Models"
      url: https://fredhohman.com/papers/19-gamut-chi.pdf
      type: pdf
      required: false
      year: 2019
      venue: ACM CHI
      author: Fred Hohman, Andrew Head, Rich Caruana, Robert DeLine, Steven Drucker
- date: 2022-11-29
  title: Uncertainty
  _discussion: https://canvas.cmu.edu/courses/24179/discussion_topics/346292
  slides: https://drive.google.com/file/d/1Ej2rYSp51TwMrIvtEYVQmPE3SwOUCpM5/view
  readings:
  - name: "The Curious Absence of Uncertainty from Many (Most?) Visualizations"
    url: https://medium.com/multiple-views-visualization-research-explained/the-curious-absence-of-uncertainty-from-many-most-visualizations-f0c7f89e8d84
    type: website
    author: Jessica Hullman
    required: true
    year: 2019
  - name: "The effects of communicating uncertainty on public trust in facts and numbers"
    url: https://www.pnas.org/content/pnas/117/14/7672.full.pdf
    type: pdf
    required: false
    year: 2020
    author: Anne Marthe van der Bles, Sander van der Linden, Alexandra L. J. Freeman, and David J. Spiegelhalter
- date: 2022-12-01
  title: Final Project Presentations
- date: 2022-12-06
  title: Final Project Presentations
- date: 2022-12-08
  title: Final Project Presentations
  due:
  - name: "Final Project Video Presentation"
    url: https://canvas.cmu.edu/courses/30777/assignments/508255
  - name: "Final Project Report"
    url: https://canvas.cmu.edu/courses/30777/assignments/508252

---

Submit assignments and discussions on [Canvas](https://canvas.cmu.edu/courses/30777).

This course is an introduction to key design principles and techniques for interactively visualizing data. The major goals of this course are to understand how visual representations can help in the analysis and understanding of complex data, how to design effective visualizations, and how to create your own interactive visualizations using modern web-based frameworks.

After you successfully complete the course you will be able to:

- Understand the value of visualization
- Critically evaluate visualizations and suggest improvements and refinements
- Use best practices from design to create effective visualizations
- Use principles of human perception and cognition in visualization design
- Learn how to use visualization as a communication tool
- Conduct exploratory data analysis and transform data
- Create web-based interactive visualizations using frameworks such as [Vega-Lite](https://vega.github.io/vega-lite/) and [D3](https://d3js.org)
- Be prepared to do research in visualization

{: .no_toc }

## Jump to

<!-- prettier-ignore-start -->

- TOC
{:toc}
<!-- prettier-ignore-end -->

## Schedule and Readings

{% for lecture in page.schedule %}

<div class="flex mt1">
  <span class="w-10 gray">{{ lecture.date | date: "%a, %b %d" }}</span>
  <div class="w-90 measure-wide lh-copy">
    <h3 class="f5 normal mt0">
      <span class="b black">
      {{ lecture.title }}
      </span>

      {% if lecture.discussion %}
        <a class="fr" href="{{ lecture.discussion }}" title="Discussion"><i class="fas fa-comments"></i></a>
      {% else %}
        <span class="fr"><i class="fas fa-comments" aria-hidden="true" title="Discussion link coming"></i></span>
      {% endif %}

      {% if lecture.slides %}
        <a class="fr mr2" href="{{ lecture.slides }}"><i class="fas fa-window-maximize" aria-hidden="true"></i> Slides</a>
      {% else %}
        <span class="fr mr2"><i class="fas fa-window-maximize" aria-hidden="true" title="Slides link coming"></i> Slides</span>
      {% endif %}
    </h3>
    <ul class="list pl0 mv0">
    {% for due in lecture.due %}
      <li class="mt1">
        <small class="br2 white bg-orange ph1 mr1">Due</small>
        <a href="{{ due.url }}">{{ due.name }}</a>
      </li>
    {% endfor %}
    </ul>
    <ul class="list pl0 mt0">
    {% for reading in lecture.readings %}
      <li class="mt1">
      {% if reading.required %}
        <small class="br2 white bg-gray ph1 mr1">Required</small>
      {% else %}
        <small class="br2 ba b--gray ph1 mr1">Optional</small>
      {% endif %}

      {% if reading.type == "video" %}
        <i class="far fa-film" aria-hidden="true"></i>
      {% elsif reading.type == "pdf" %}
        <i class="far fa-file-pdf" aria-hidden="true"></i>
      {% elsif reading.type == "website" %}
        <i class="far fa-globe" aria-hidden="true"></i>
      {% elsif reading.type == "notebook" %}
        <i class="fas fa-laptop-code"  aria-hidden="true"></i>
      {% endif %}

      {% if reading.url %}
        <a href="{{reading.url}}">{{ reading.name }}</a>
      {% else %}
        {{ reading.name }}
      {% endif %}

      {% if reading.author %}
        by {{reading.author}}
      {% endif %}
      {% if reading.venue %}
        in <i>{{reading.venue}}</i>
      {% endif %}
      {% if reading.year %}
        <i>{{reading.year}}</i>
      {% endif %}
      {% if reading.note %}
        <br/>
        <small class="dark-gray">{{reading.note}}</small>
      {% endif %}
      </li>
    {% endfor %}

  </ul>
  </div>
</div>
{% endfor %}

## Details

## Prerequisites

Expected skills you should have before entering the course:

- Programming
- [Git](https://git-scm.com) (collaborative software development)

Skills that can be learned during the course:

- JavaScript
- HTML, CSS, DOM
- Vega, Vega-Lite, D3
- SQL

### Projects

The course is project oriented. It includes a large final group-defined project along with 2 homework assignments designed to provide the stepping stones needed to complete the final project. Tentative due dates for these projects can be found at the bottom of this syllabus under the 'Course Summary' heading. Your work will be evaluated relative to your background and level of effort. This is a graduate class, and the assumption is that you are a mature and motivated student, and that you will define your work so that you learn and grow, given your background. Students who are taking this course as a part of a technical requirement (such as the computer science course requirement in the HCI PhD) will need to do more advanced or ambitious projects, and should consult with the instructor to make sure they are meeting this bar.

All homework assignments are to be done as individual work. It is expected that students may assist each other with conceptual issues, but not provide code. If you use example code, you must explicitly acknowledge this in your assignment submission. If you are unsure about these boundaries, ask.

### Work Required

This will not be an exam-heavy course. Instead, much of the work will focus on projects. The course will focus on understanding the techniques of data science and visualization through developing creative analyses and visualizations using tools to solve defined problems.

There is no final exam in this course. Students who do well will be invited to continue on an independent project on topics related to the course, working with Prof. Moritz during a future semester.

### Readings

You will be expected to read assigned readings before the lecture they pertain to. These may include chapters drawn from textbooks about data, or readings about the research literature. To incentivize this, each student will be required to make at least one relevant postings to the discussion group before the class on which each reading is due. This participation will count toward the Participation and Attendance portion of their grade.

All students are required to submit at least 1 substantive discussion post per lecture related to the course readings. Each student has 1 pass for skipping comments.

Good comments typically exhibit one or more of the following:

- Critiques of arguments made in the papers
- Analysis of implications or future directions for work discussed in lecture or readings
- Clarification of some point or detail presented in the class
- Insightful questions about the readings or answers to other people's questions
- Links to web resources or examples that pertain to a lecture or reading

### Grades

The tentative breakdown for grading is below. As a reminder, here is the [university policy on academic integrity](http://www.cmu.edu/policies/documents/AcademicIntegrity.htm).

- 40% Homework Assignments
- 50% Final Project
- 10% Participation and Attendance

## Resources

[The MDN web docs](https://developer.mozilla.org/en-US/docs/Web) are the go-to guide for web technolgies such as HTML, CSS, and JavaScript.

For D3 questions, check out [D3&#39;s documentation](https://github.com/d3/d3/wiki).

For Vega-Lite questions, check out [the Vega-Lite documentation](https://vega.github.io/vega-lite/docs/) and the examples in the [online editor](https://vega.github.io/editor/).

## Policies

### Respect for Diversity

It is our intent that students from all diverse backgrounds and perspectives be well served by this course, that students’ learning needs be addressed both in and out of class, and that the diversity that students bring to this class be viewed as a resource, strength and benefit. It is our intent to present materials and activities that are respectful of diversity: gender, sexuality, disability, age, socioeconomic status, ethnicity, race, and culture. Your suggestions are encouraged and appreciated. Please let us know ways to improve the effectiveness of the course for you personally or for other students or student groups. In addition, if any of our class meetings conflict with your religious events, please let us know so that we can make arrangements for you.

### Accommodations for Students with Disabilities

If you have a disability and are registered with the Office of Disability Resources, we encourage you to use their online system to notify us of your accommodations and discuss your needs with us as early in the semester as possible. We will work with you to ensure that accommodations are provided as appropriate. If you suspect that you may have a disability and would benefit from accommodations but are not yet registered with the Office of Disability Resources, we encourage you to contact them at [access@andrew.cmu.edu](mailto:access@andrew.cmu.edu).

### Health and Well-being

This year is unlike any other. We are all under a lot of stress and uncertainty at this time. Make sure to move regularly, eat well, and reach out to your support system or us if you need to. We can all benefit from support in times of stress, and this semester is no exception.

Due to the ongoing pandemic, **do not under any circumstances physically come to class sick** to keep your fellow students and instructors safe. Reach out to the instructors to determine a way to participate remotely and/or catch-up.

If you or anyone you know experiences any academic stress, difficult life events, or feelings like anxiety or depression, we strongly encourage you to seek support. Counseling and Psychological Services (CaPS) is here to help; call [412-268-2922](tel:412-268-2922) and visit their website at [www.cmu.edu/counseling/](http://www.cmu.edu/counseling/). Consider reaching out to a friend, faculty or family member you trust for help getting connected to the support that can help. If you or someone you know is feeling suicidal or in danger of self-harm, call someone immediately, day or night:

- CaPS: [412-268-2922](tel:412-268-2922)
- Re:solve Crisis Network: [888-796-8226](tel:888-796-8226)

If the situation is life threatening, call the police. On campus call CMU Police: [412-268-2323](tel:412-268-2323). Off campus: [911](tel:911).

### Food Insecurity

If you are worried about affording food or feeling insecure about food, there are resources on campus who can help. Email the CMU Food Pantry Coordinator to schedule an appointment:
Pantry Coordinator: [cmu-pantry@andrew.cmu.edu](mailto:cmu-pantry@andrew.cmu.edu)
SLICE office: [412-268-8704](tel:412-268-8704)

If you have questions about this or your coursework, please let the instructors know. Thank you, and have a great semester.

## Acknowledgements

Material for this class has been adapted from classes taught by [Jeffrey Heer at the University of Washington](https://courses.cs.washington.edu/courses/cse512/), and [Arvind Satyanarayan at MIT](http://vis.csail.mit.edu/classes/6.859/), which in turn build on materials from many others.

The class draws heavily on materials and examples found online, and we try our best to give credit by linking to the original source. Please contact us if you find materials where credit is missing or that you would rather have removed.
