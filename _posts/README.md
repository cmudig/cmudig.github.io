# Adding a post

Create a new `*.md` file in the `_posts` directory with the date and title in the name. Learn more about posts in [the Jekyll docs](https://jekyllrb.com/docs/posts/).

## Research studies

You can specially designate a post that describes an ongoing research study, using front matter like the following:

```
---
layout: study
title: "Study Title"
date: 2021-02-26 12:00:00 -0400
is_study: true
study_state: "Recruiting"
contact_email: "scotty@cmu.edu"
enrollment_link: "https://my.recruitment.link"
last_updated: 2021-02-26 12:00:00 -0400
---
```

Allowed study states are "Upcoming" (only contact link will not be shown), "Recruiting" (enrollment and contact links will be shown), and "Completed" (only contact link will be shown). Be sure to update the study when you are finished recruiting, and set the `last_updated` date accordingly.

You can also add a thumbnail image using the `thumbnail` and `thumbnail_alt` front matter attributes - this will be shown on the `/news` and `/participate` pages. See `2021-02-26-emb-comp-study.md` for an example.