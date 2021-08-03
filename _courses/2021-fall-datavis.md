---
layout: course
name: Data Visualization
year: 2021
semester: Fall
instructors:
  - Adam Perer
  - Dominik Moritz
tas:
  - Alex Cabrera
redirect_from:
  - vis2021

schedule:
  - date: 2021-08-31
    title: "Introduction and the Value of Visualization"
    readings:
      - name: Readings in Infovis Chapter 1
        required: true
      - name: Intro to Vega Lite
        required: true
  - date: 2021-09-02
    title: "Sketching"
    readings:
      - name: The Anatomy of Sketching (Chapter 9)
        author: Bill Buxton
        venue: Sketching User Experiences
        required: true
        type: pdf
        url: https://drive.google.com/file/d/1-1Xlvni3_NFoSiNs8JDuDQV8bFLDuJcj/view?usp=sharing
      - name: Sketching with Data Opens the Mind's Eye
        author: Giorgia Lupi
        required: true
        type: pdf
        url: https://drive.google.com/file/d/1--4iqyEJNSly0arOTpdE9ppotdHSTz9W/view?usp=sharing
      - name: The Shape of My Thoughts
        author: Giorgia Lupi
        venue: Eyeo 2014
        required: false
        type: video
        url: https://vimeo.com/109954123
  - date: 2021-09-07
    title: "Data and Image Models"
  - date: 2021-09-09
    title: "Effective Visual Encodings"
    readings:
      - name: Basic Principles of Visualization (Chapter 5)
        author: Alberto Cairo
        venue: The Truthful Art
        required: true
        type: pdf
        url: https://drive.google.com/open?id=171tAFZLofETfiOm4OElpHcWSlWQ8Yven&authuser=aperer1%40andrew.cmu.edu&usp=drive_fs
      
      
---

[Canvas](https://canvas.cmu.edu/courses/24179).


This course is an introduction to key design principles and techniques for interactively visualizing data. The major goals of this course are to understand how visual representations can help in the analysis and understanding of complex data, how to design effective visualizations, and how to create your own interactive visualizations using modern web-based frameworks.

After successful completion of the course you will be able to:
* Understand the value of visualization
* Critically evaluate visualizations and suggest improvements and refinements 
* Use best practices from design to create effective visualizations 
* Use principles of human perception and cognition in visualization design 
* Learn how to use visualization as a communication tool
* Conduct exploratory data analysis and transform data
* Create web-based interactive visualizations using frameworks such as Vega-Lite and D3
* Be prepared to do research in visualization
 

## Prerequisites

Expected skills you should have before entering the course:
* Programming
* Git (collaborative software development)

Skills that can be learned during the course:
* JavaScript
* HTML, CSS, DOM
* Observable
* Vega, D3
* SQL


## Schedule and Readings

{% for lecture in page.schedule %}

<div>
  <p class=" mb0 gray">{{ lecture.date | date: "%a, %b %d" }}</p>
  <p class="mt0 mb1 f4">{{ lecture.title }}</p>
  <ul class="list pl0 mt0">
  {% for reading in lecture.readings %}
    <li>{% if reading.required %}<small class="br2 white bg-gray ph1">Required</small>{% else %}<small>Optional</small>{% endif %} 
    <a href="{{reading.url}}"> {{ reading.name }} </a> 
    {% if reading.type == "video" %}
      <i class="fas fa-film" aria-hidden="true"></i>
    {% endif %}
    {% if reading.type == "pdf" %}
      <i class="far fa-file-pdf" aria-hidden="true"></i>
    {% endif %}
    {% if reading.author %}
      by {{reading.author}} 
    {% endif %}
    {% if reading.venue %}
      in <i>{{reading.venue}}</i>
    {% endif %}
    </li>
  {% endfor %}
  </ul>
</div>

{% endfor %}

## Details

### Projects

The course is project oriented. It includes a large final group-defined project along with 2 homework assignments designed to provide the stepping stones needed to complete the final project. Tentative due dates for these projects can be found at the bottom of this syllabus under the 'Course Summary' heading. Your work will be evaluated relative to your background and level of effort. This is a graduate class, and the assumption is that you are a mature and motivated student, and that you will define your work so that you learn and grow, given your background. Students who are taking this course as a part of a technical requirement (such as the computer science course requirement in the HCI PhD) will need to do more advanced or ambitious projects, and should consult with the instructor to make sure they are meeting this bar.

All homework assignments are to be done as individual work. It is expected that students may assist each other with conceptual issues, but not provide code. If you use example code, you must explicitly acknowledge this in your assignment submission. If you are unsure about these boundaries, ask.

### Work Required

This will not be an exam-heavy course. Instead, much of the work will focus on projects. The course will focus on understanding the techniques of data science and visualization through developing creative analyses and visualizations using tools to solve defined problems.

There is no final exam in this course. Students who do well will be invited to continue on an independent project on topics related to the course, working with Prof. Perer or Prof. Moritz during a future semester.

### Readings

You will be expected to read assigned readings before the lecture they pertain to. These may include chapters drawn from textbooks about data, or readings about the research literature. To incentivize this, each student will be required to make at least one relevant postings to the discussion group before the class on which each reading is due. This participation will count toward the Participation and Attendance portion of their grade.

All students are required to submit at least 1 substantive discussion post per lecture on Piazza related to the course readings. Each student has 1 pass for skipping comments.

Good comments typically exhibit one or more of the following:

- Critiques of arguments made in the papers
- Analysis of implications or future directions for work discussed in lecture or readings
- Clarification of some point or detail presented in the class
- Insightful questions about the readings or answers to other people's questions
- Links to web resources or examples that pertain to a lecture or reading

### Grades

The tentative breakdown for grading is below. As a reminder, here is the [university policy on academic integrity](http://www.cmu.edu/policies/documents/AcademicIntegrity.htm).

- 30% Homework Assignments
- 60% Final Project
- 10% Participation and Attendance

## Policies

### Respect for Diversity

It is our intent that students from all diverse backgrounds and perspectives be well served by this course, that students’ learning needs be addressed both in and out of class, and that the diversity that students bring to this class be viewed as a resource, strength and benefit. It is our intent to present materials and activities that are respectful of diversity: gender, sexuality, disability, age, socioeconomic status, ethnicity, race, and culture. Your suggestions are encouraged and appreciated. Please let us know ways to improve the effectiveness of the course for you personally or for other students or student groups. In addition, if any of our class meetings conflict with your religious events, please let us know so that we can make arrangements for you.

### Accommodations for Students with Disabilities

If you have a disability and are registered with the Office of Disability Resources, we encourage you to use their online system to notify us of your accommodations and discuss your needs with us as early in the semester as possible. We will work with you to ensure that accommodations are provided as appropriate. If you suspect that you may have a disability and would benefit from accommodations but are not yet registered with the Office of Disability Resources, we encourage you to contact them at [access@andrew.cmu.edu](mailto:access@andrew.cmu.edu).

### Health and Well-being

If you or anyone you know experiences any academic stress, difficult life events, or feelings like anxiety or depression, we strongly encourage you to seek support. Counseling and Psychological Services (CaPS) is here to help; call [412-268-2922](tel:412-268-2922) and visit their website at [www.cmu.edu/counseling/](http://www.cmu.edu/counseling/). Consider reaching out to a friend, faculty or family member you trust for help getting connected to the support that can help. If you or someone you know is feeling suicidal or in danger of self-harm, call someone immediately, day or night:

- CaPS: [412-268-2922](tel:412-268-2922)
- Re:solve Crisis Network: [888-796-8226](tel:888-796-8226)

If the situation is life threatening, call the police. On campus call CMU Police: [412-268-2323](tel:412-268-2323). Off campus: [911](tel:911).

If you have questions about this or your coursework, please let the instructors know. Thank you, and have a great semester.

## Acknowledgements

Material for this class has been adapted from classes taught by Jeffrey Heer at the University of Washington, and Arvind Satyanarayan at MIT, which in turn build on materials from many others.

The class draws heavily on materials and examples found online, and we try our best to give credit by linking to the original source. Please contact us if you find materials where credit is missing or that you would rather have removed.
