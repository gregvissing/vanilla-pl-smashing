module.exports = plop => {
	plop.setHelper("upperCase", txt => txt.toUpperCase());

	plop.setGenerator("component", {
		description: "Create a reusable component",
		prompts: [
			{
				type: "input",
				name: "name",
				message:
					"What is your component name?"
			}
		],
		actions: [
			{
				type: "add",
				path:
					"source/_patterns/{{pascalCase name}}/{{pascalCase name}}.hbs",
				templateFile:
					"plop-templates/Component/component.hbs"
			},
			{
				type: "add",
				path:
					"source/_patterns/{{pascalCase name}}/{{pascalCase name}}.scss",
				templateFile:
					"plop-templates/Component/Component.scss.hbs"
			}
		]
	});
};
