# bib

Holy Bible API with NodeJS, PostgreSQL and Sequelize

---

```javascript
    if(faithfulness(you.Faith) === true){
        const rules = require('sky_kingdom');
        you.heartHealth = rules.WORD_OF_THE_ETERNAL_LIFE;
        you.garnerFill(rules.PROMISSES_OF_GOD['the_best_of_earth']);
        you.memoryRecord.push(ISAIAH[1][19]);
    }
```
# The API
---

This API provides the chapters of the books in Bible by request. The output content is a JSON object containing only contents and metadata from the book and its requested chapter, that is, with all of its verses and cross-references.

The views in this project were experimental only and their routes will not be used in providing content.

### **Steps**

## `node src/bible.js` runs the project


1. Firstly add nodemon dependency to the project.
  
  ```bash
  yarn add nodemon -D
  
  # or
  
  npm install nodemon -D
  ```
  The flag `-D` means nodemon was added just only for **D**evelopment environment, in this case, the file `package.json` is like:

  ```json
  {
    "devDependencies":{
        "nodemon": "^2.0.2"
    }
  }
  ```


  Before this add, whenever the project was modified, needed run `node src/bible.js` to view the changes.
  
  **`yarn dev`**
  
  Now, starting project with the `yarn dev` comand, whenever the project has any changes, nodemon keeps it runing in realtime.
  
  > This note helps remember forgoten initiallization comands.

2. Ensure the database is configured, such as `.sequelizerc` file and `database/index.js` directory.
3. Run `yarn sequelize db:--help` for review sequelize help.
4. Run `yarn sequelize db:create`: Will create the configured database in the project.
5. Run `yarn sequelize db:migrate`: Will create the database tables as configured in created **Migration**.
6. Open Insomnia, call a GET request to route `http://localhost:3333/insert`, to populate the created tables by previous step.
