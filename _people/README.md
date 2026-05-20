# Adding a person

Create a new `*.md` in `_people` with a unique name for you. Then fill it with the following content.

```md
---
name: ...
website: ...
image: /assets/people/....avif
role: PhD Student
advisors:
    - AdvisorFirstName AdvisorLastName
---

Fun fact.
```

We have the following roles: `Professor`, `Postdoc`, `PhD Student`, `Visiting PhD Student`, `Masters Student`, `Undergraduate Student`, and `Collaborator`. You can also add a new role if it makes sense.

Add a picture to [the assets directory](../assets/people) as an **AVIF** image, around `400x400` pixels, square (equal width and height). Convert with [squoosh.app](https://squoosh.app) (choose AVIF, quality ~65) or `avifenc -q 65 -s 6 photo.jpg photo.avif`.

Once someone leaves the group, add `alumni_since: XXXX` to make them as alumni.

Please send a pull request with the changes and an admin will merge it. 
