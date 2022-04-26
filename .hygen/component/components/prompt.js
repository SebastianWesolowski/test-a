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
      {
        type: "confirm",
        name: "children",
        message: "Do you want to have children ?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const indexAllow = ["components", "layout", "utils"];
      answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);

      const { category, children, component_name } = answers;

      const path = `${category}/${component_name}`;
      const absPath = `src/${path}`;
      let addIndex = false;
      let addIndexPath = null;

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
