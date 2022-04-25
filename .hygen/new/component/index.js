module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which type component?",
        choices: ["components", "layout", "pages", "layout", "utils"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      answers.component_name = answers.component_name.charAt(0).toUpperCase() + answers.component_name.slice(1);

      const { category, component_name } = answers;

      const path = `${category}/${component_name}`;
      const absPath = `src/${path}`;
      return { ...answers, path, absPath, category };
    });
  },
};
