# bts
BHE Technical services website 

## retrospective notes/to-do/improvements, from last project
- Design was a pain point. The worst part, in fact, make steps to create a process.
- Create & use common code snippets, using the snippets [extension](https://marketplace.visualstudio.com/items?itemName=inu1255.easy-snippet) mentioned in [syntax](https://syntax.fm/show/278/potluck-mdx-portfolio-projects-code-commenting-css-properties-reusable-components-more)
- create a template/tutorial/process to implement dark mode using tailwind, on all sites going forward.
- make sure the file structure for images is designed/in place before code starts, because it got pretty sloppy with the DIFTK project, and that's just boring to clean up.
- switch fully from hex to HSL, taken from [refactoring ui](https://refactoringui.com/book/table-of-contents/)

## UI Design
- [Figma](https://www.figma.com/file/zckbFc5ZmqzWE3yukOpiZ8/BTS?node-id=0%3A1)
- [Dribble](https://dribbble.com/txndai/collections/3274955-BTS-KBM-project?utm_source=Clipboard_clipboard_collection&utm_campaign=txndai&utm_content=BTS%20-%20KBM%20project&utm_medium=Social_Share) moodboard
- [company profile](https://docs.google.com/document/d/1W3t3HTfBr-f2DHcSuVpZECLi1JxTzrXWWJ-uS9wB_x0/edit) - to aid with content & design


# Content Management
- [GraphCMS](https://app.graphcms.com/) is being used as the CMS (Along with a build hook that triggers upon publishing of any new content, as seen on taz-store project)
- Product item schema: <br>
  ``` 
  {
  title: lorem
  description: long text
  image: asset
  category: long text
  } 
  ```
- Category: <br>
  ``` 
  {
  title: lorem
  description: long text
  } 
  ```

# Website & dev notes
- Will either go with [Gatsby](https://github.com/oddstronaut/gatsby-starter-tailwind) or [Next](https://github.com/oddstronaut/next-starter-tailwind).
- [TailwindCSS](http://tailwindcss.com/) for styling 
- [Heroicons](https://heroicons.dev/), [Feather icons](https://feathericons.com/), [Tablericons](https://tablericons.com/)
- [ ] how to handle forms? 
- [ ] how to get current page information from node? to help with conditionally styling the header 
## reference sites
- [cml](https://www.cml.uk.com/) - inspiring bits of design
- [Coffman](https://www.coffman.com/) - nice sharp edges. icons feel a bit thin & lonely though. Mixture of rounded buttons with sharp surroundings not sitting well. Their services page is interesting though.


