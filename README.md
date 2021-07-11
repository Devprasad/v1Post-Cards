# v1Post-Cards

A mini 'synchronous' micro-service app to create post cards with comments.

## Issues:
- Styling
- One request/post to fetch the comments. If it was monolith posts & comments would live together & hence  all the posts & comments could be fetcehd together. 
In microservice, we can not store the data together yet (creates dependencies between posts & comments service). Need a async/event based design!


