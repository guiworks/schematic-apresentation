import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  renameTemplateFiles,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import {
  basename,
  dirname,
  normalize,
  Path,
  strings,
} from '@angular-devkit/core';

export function crud(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new Error('Could not find Angular workspace configuration');
    }

    // convert workspace to string
    const workspaceContent = workspaceConfig.toString();

    // parse workspace string into JSON object
    const workspace: any = JSON.parse(
        workspaceContent
    );

    if (!options.project) {
      options.project = workspace.defaultProject;
    }

    const projectName = options.project as string;

    const project = workspace.projects[projectName];

    const projectType = project.projectType === 'application' ? 'app' : 'lib';

    if (options.path === undefined) {
      options.path = `${project.sourceRoot}/${projectType}`;
    }

    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    const templateSource = apply(url('./files'), [
      renameTemplateFiles(),
      template({
        ...strings,
        ...options,
        classify: strings.classify,
        dasherize: strings.dasherize,
        uppercase: (str: string) => String(str).toUpperCase(),
      }),
      move(normalize((options.path + '/' + options.name) as string)),
    ]);

    return chain([branchAndMerge(chain([mergeWith(templateSource)]))])(
        tree,
        context
    );
  };
}

export function parseName(
    path: string,
    name: string
): { name: string; path: Path } {
  const nameWithoutPath = basename(name as Path);
  const namePath = dirname((path + '/' + name) as Path);

  return {
    name: nameWithoutPath,
    path: normalize('/' + namePath),
  };
}
