---
layout: course
name: Data Science for Product Managers
year: 2023
semester: Spring
instructors:
  - Adam Perer
tas:
  - Anusha Kamath
  - Aninditha Ramesh
time: M/W 12:30-1:50 PM
location: 3SC 172
redirect_from:
  - dspm2023

schedule:
  - date: 2023-03-13
    title: "Introduction and the Data Science Pipeline"
    slides: https://drive.google.com/file/d/1AY85ddlbe8K0_fHMgN2qBGJFNfUVcJVh/view?usp=sharing
  - date: 2023-03-15
    slides: https://drive.google.com/file/d/1AUZMim4LA7fLR5zsQtSMaRZUvokli1vC/view?usp=sharing
    title: "Value of Visualization"
    readings:
      - name: Information Visualization (Chapter 1)
        author: Stuart Card, Jock Mackinlay, and Ben Shneiderman
        year: 1999
        type: pdf
        required: true
        type: pdf
        url: https://drive.google.com/file/d/1-SrBG2PonDK4kPxIr6qaY1quYeyozZ0c
  - date: 2023-03-20
    slides: https://drive.google.com/file/d/1BhNGMC6CNSrncBEYAatmuE8LstjwwY1O/view?usp=sharing
    title: "Exploratory Data Analysis with Tableau"
    readings:
      - name: Download and Install Tableau Public (before class)
        required: true
        type: website
        url: https://public.tableau.com/en-us/s/
  - date: 2023-03-22
    due:
      - name: "Assignment 0: Collecting Data"
        url: https://canvas.cmu.edu/courses/34292/assignments/577858
    title: "Visual Encodings with Colab and Altair"
    slides: https://colab.research.google.com/drive/1FzgtewZ2nWbxD6dV7XrSjWYHP1-5l4QF?usp=sharing
    readings:
      - name: Getting Started
        author: Marian Dörk
        required: true
        type: website
        url: https://colab.research.google.com/github/nrchtct/infovis-tutorials/blob/master/infovis1start.ipynb
      - name: Data Types, Graphical Marks, and Visual Encoding Channels
        author: Jeffrey Heer, Dominik Moritz, Jake VanderPlas, and Brock Craf
        required: true
        type: website
        url: https://colab.research.google.com/github/uwdata/visualization-curriculum/blob/master/altair_marks_encoding.ipynb
  - date: 2023-03-27
    title: "Data Quality"
    slides: https://drive.google.com/file/d/1CP_thQG4bBcBVs1geCUAlBNM80OMA7M-/view?usp=sharing
    due:
      - name: "Assignment 1: Dashboard Creation"
        url: https://canvas.cmu.edu/courses/34292/assignments/578463
  - date: 2023-03-29
    title: "Practical Machine Learning"
    slides: https://drive.google.com/file/d/1CXyXHIjh7i9SYpdZWCt173c4AdUobZM4/view?usp=sharing
    readings:
      - name: "Black Boxes are not Required"
        required: true
        type: audio
        author: Cynthia Rudin
        venue: Data Skeptic Podcast
        url: https://dataskeptic.com/blog/episodes/2020/black-boxes-are-not-required
      - name: "Stop Explaining Black Box Machine Learning Models for High Stakes Decisions and Use Interpretable Models Instead"
        required: false
        type: pdf
        author: Cynthia Rudin
        venue: Nature Machine Intelligence
        url: https://arxiv.org/abs/1811.10154
  - date: 2023-04-03
    due:
      - name: "Assignment 2: Data Cleaning and Exploratory Data Analysis"
        url: https://canvas.cmu.edu/courses/34292/assignments/577859
    title: "Practical Machine Learning II"
    slides: https://drive.google.com/file/d/1CXyXHIjh7i9SYpdZWCt173c4AdUobZM4/view?usp=sharing
  - date: 2023-04-05
    title: "Interpretability (Guest Lecture)"
  - date: 2023-04-10
    title: "Optional TA session"
  - date: 2023-04-12
    title: "Effective Visual Encodings"
    slides: https://drive.google.com/file/d/1CZKXgItegl3q1M0dp-AXYRJdwNnNkOIc/view?usp=sharing
    due:
      - name: "Assignment 3: Classifiers and Prediction"
        url: https://canvas.cmu.edu/courses/34292/assignments/577860
    readings:
      - name: "Toward a Deeper Understanding of the Role of Interaction in Information Visualization"
        author: Ji Soo Yi, Youn ah Kang, John T. Stasko and Julie A. Jacko
        venue: IEEE Transactions on Visualization and Computer Graphics
        year: 2007
        required: false
        type: pdf
        url: https://drive.google.com/open?id=1iCwsWp8h3zC2_LtjBa4S-JrVEFjz3_10&authuser=aperer1%40andrew.cmu.edu&usp=drive_fs
  - date: 2023-04-17
    title: "Effective Visual Encodings II"
    slides: https://drive.google.com/file/d/1CZKXgItegl3q1M0dp-AXYRJdwNnNkOIc/view?usp=sharing
    readings:
      - name: "Layering and Seperation (Chapter 3)"
        url: https://drive.google.com/file/d/1--k-IiRxcYJWADUo9EvthaG8pgTzxwaz/view?usp=sharing
        author: Edward Tufte
        venue: Envisioning Information
        required: true
        type: pdf
  - date: 2023-04-19
    title: "Telling Stories with Data"
    slides: https://drive.google.com/file/d/1CayQcIfPP1GJq2UKicIJdPwUYXeNiI-9/view?usp=sharing
    readings:
      - name: Basic Principles of Visualization (Chapter 5)
        author: Alberto Cairo
        venue: The Truthful Art
        required: true
        type: pdf
        url: https://drive.google.com/open?id=171tAFZLofETfiOm4OElpHcWSlWQ8Yven
      - name: What to consider when choosing colors for data visualization
        author: Lisa Charlotte Muth
        year: 2018
        url: https://blog.datawrapper.de/colors/
        type: website
        required: false
  - date: 2023-04-24
    title: "Guest Lecture:  Kunal Khadilkar (Data Scientist at Abobe)"
  - date: 2023-04-26
    title: "Optional TA help session"  
  - date: 2023-04-28
    due:
      - name: "Assignment 4: Answering Data Science Questions with EDA"
        url: https://canvas.cmu.edu/courses/34292/assignments/577862

---

*Additional course information available on [Canvas](https://canvas.cmu.edu/courses/34292).*


The goal of this course is to provide you with the tools to understand and perform data science as it relates to product managers. You will learn and perform customer focused data analysis through a combination of lectures, readings, and practical skills development. Over the course of the semester, you will learn about data science and the entire data pipeline from collecting and analyzing to interacting with data. 

This course requires comfort with programming, at a minimum python and associated libraries (pandas, scikit-learn, altair, etc.).

The learning goals of the course are as follows:

* To understand basic data manipulation (import, export, columns, subsets, data frames)
* To introduce common problems with data such as structural problems, outliers, incomplete data, and dirty data
* To introduce basic concepts in data interpretation including feature generation, statistical analysis and classification (assumptions of data, bad data, missing data, outliers and winsoring, data shape)
* To introduce concepts in data visualization including what makes a good visualization and the use of visualization in both exploratory data science and presentations to others
* To provide practical applied examples of the data science using machine learning techniques
* To explore and understand Data Science Ethics and ML Ethics



{: .no_toc }

## Jump to
* TOC
{:toc}

## Schedule and Readings

*Subject to modification*

{% for lecture in page.schedule %}

<div class="flex mt1">
  <span class="w-10 gray">{{ lecture.date | date: "%a, %b %d" }}</span>
  <div class="w-90 measure-wide lh-copy">
    <h3 class="f5 normal mt0">
      <span class="b black">
      {{ lecture.title }}
      </span>

      <!-- {% if lecture.discussion %}
        <a class="fr" href="{{ lecture.discussion }}" title="Discussion"><i class="fas fa-comments"></i></a>
      {% else %}
        <span class="fr"><i class="fas fa-comments" aria-hidden="true" title="Discussion link coming"></i></span>
      {% endif %} -->

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
      {% elsif reading.type == "audio" %}
        <i class="far fa-podcast" aria-hidden="true"></i>
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

# Syllabus

## Prerequisites

The class will involve programming and debugging. You should not take the course if you find programming or debugging extremely difficult because you will have to master several programming languages/concepts/libraries in very short order. That being said, the assignments that require these will have useful resources for brushing up on the topics.

## Required Textbooks
There is no required textbook for this course. Readings are drawn from a variety of books, readings and online postings, and will be provided by the instructor.

## Amount of Work
This is a "6 unit" mini. As per university policy, this means that this course is expected to take students 12 hours per week, including class time. Surveys of previous students show that this is accurate. 

## How to Submit Assignments

All assignments must be turned in using [Canvas](https://canvas.cmu.edu/courses/34292).

## Grading

The tentative breakdown for grading is below. As a reminder, here is the [university policy on academic integrity](http://www.cmu.edu/policies/documents/AcademicIntegrity.htm).

There will be 5 assignments, each totaling to 90% of your final grade.  All assignments in this course are **individual: you are required to do them by yourself**.
Each person must do their own work independently.
Participation will comprise the remaining 10%:

* Assignment 0: 5%
* Assignment 1: 20%
* Assignment 2: 20%
* Assignment 3: 20%
* Assignment 4: 25%
* Participation: 10%

Participation includes interaction during classroom activities, as well as sharing stories, questions and comments related to past and upcoming lectures.

## Late Policy

Assignments are due before the beginning of class (12:30 PM ET) on the specified day. A penalty of 10 points out of 100 (one letter grade) will be immediately applied after the start time of class. An additional 5 points will be subtracted for each additional 24-hour period late.  You are responsible to confirm that your Canvas submittal was successfully uploaded.

### Respect for Diversity

It is our intent that students from all diverse backgrounds and perspectives be well served by this course, that students’ learning needs be addressed both in and out of class, and that the diversity that students bring to this class be viewed as a resource, strength and benefit. It is our intent to present materials and activities that are respectful of diversity: gender, sexuality, disability, age, socioeconomic status, ethnicity, race, and culture. Your suggestions are encouraged and appreciated. Please let us know ways to improve the effectiveness of the course for you personally or for other students or student groups. In addition, if any of our class meetings conflict with your religious events, please let us know so that we can make arrangements for you.

### Accommodations for Students with Disabilities

If you have a disability and are registered with the Office of Disability Resources, we encourage you to use their online system to notify us of your accommodations and discuss your needs with us as early in the semester as possible. We will work with you to ensure that accommodations are provided as appropriate. If you suspect that you may have a disability and would benefit from accommodations but are not yet registered with the Office of Disability Resources, we encourage you to contact them at [access@andrew.cmu.edu](mailto:access@andrew.cmu.edu).

### Health and Well-being

If you are experiencing COVID-like symptoms or have a recent COVID exposure, do not attend class if we are meeting in-person.  Please email the instructors for accomodations.

If you or anyone you know experiences any academic stress, difficult life events, or feelings like anxiety or depression, we strongly encourage you to seek support. Counseling and Psychological Services (CaPS) is here to help; call [412-268-2922](tel:412-268-2922) and visit their website at [www.cmu.edu/counseling/](http://www.cmu.edu/counseling/). Consider reaching out to a friend, faculty or family member you trust for help getting connected to the support that can help. If you or someone you know is feeling suicidal or in danger of self-harm, call someone immediately, day or night:

- CaPS: [412-268-2922](tel:412-268-2922)
- Re:solve Crisis Network: [888-796-8226](tel:888-796-8226)

If the situation is life threatening, call the police. On campus call CMU Police: [412-268-2323](tel:412-268-2323). Off campus: [911](tel:911).

If you have questions about this or your coursework, please let the instructors know. Thank you, and have a great semester.
