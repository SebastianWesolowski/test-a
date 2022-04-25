module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which type component?",
        choices: ["components", "layout", "pages", "utils"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const childrenAllow = ["layout", "pages"];
      const indexAllow = ["components", "layout", "utils"];
      answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);

      const { category, component_name } = answers;

      const path = `${category}/${component_name}`;
      const absPath = `src/${path}`;
      let children = false;
      let addIndex = false;
      let addIndexPath = null;

      if (childrenAllow.some((element) => element === category)) {
        children = true;
      }

      if (indexAllow.some((element) => element === category)) {
        addIndex = true;
        addIndexPath = `${absPath}/index.ts`;
      }

      console.log(
        "🚀 ~ file: index.js ~ line 39 ~ returninquirer.prompt ~ { ...answers, addIndex, children, path, absPath, category }",
        { ...answers, addIndex, children, path, absPath, category }
      );
      return { ...answers, addIndex, addIndexPath, children, path, absPath, category };
    });
  },
};
