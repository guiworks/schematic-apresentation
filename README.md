# Introdução

Projeto feito para ensinar o uso da biblioteca do @angular/schematics para ajudar no seu dia a dia de criação de cruds repetidas vezes ao longo de sprints.
Caso queira ver a explicação em vídeo, eu fiz uma mini palestra explicando como funciona e como você consegue usar e aplicar isso utilizando o schematics do angular. 

Confira abaixo a apresentação que eu fiz sobre o uso do schematics do angular no Angular Rio, comunidade na qual faço parte. 

[![Angular Rio Meetup](https://img.youtube.com/vi/7u2uJ4JmqBs/0.jpg)](https://www.youtube.com/watch?v=7u2uJ4JmqBs)

link: https://www.youtube.com/watch?v=7u2uJ4JmqBs


# Introduction (English)

Project made to teach the use of @angular/schematics library to help your routine on cruds creation repetly times on long it's sprints.
If you want the explanation in video, I did a mini apresentation explain how to works and how you can use and apply it using the schematics library from Angular.

Check it ou below the apresentation I did about the use of schematics from angular at Angular Rio, Angular Community which I'm part of:

https://www.youtube.com/watch?v=7u2uJ4JmqBs&


# Snapshot build of @schematics/angular

This repository is a snapshot of a commit on the original repository. The original code used to
generate this is located at http://github.com/angular/angular-cli.

We do not accept PRs or Issues opened on this repository. You should not use this over a tested and
released version of this package.

To test this snapshot in your own project, use

```bash
npm install git+https://github.com/angular/schematics-angular-builds.git
```

----
# @schematics/angular

This package contains a collection of [schematics](/packages/angular_devkit/schematics/README.md)
for generating an Angular application.

## Schematics

| Name           | Description                                                                                           |
| -------------- | ----------------------------------------------------------------------------------------------------- |
| app-shell      | Generates an app shell for running a server-side version of an app                                    |
| application    | Generates a new basic app definition in the "projects" subfolder of the workspace                     |
| class          | Creates a new, generic class definition in the given or default project                               |
| component      | Creates a new, generic component definition in the given or default project                           |
| directive      | Creates a new, generic directive definition in the given or default project                           |
| enum           | Generates a new, generic enum definition for the given or default project                             |
| guard          | Generates a new, generic route guard definition in the given or default project                       |
| interceptor    | Creates a new, generic interceptor definition in the given or default project                         |
| interface      | Creates a new, generic interface definition in the given or default project                           |
| library        | Creates a new, generic library project in the current workspace                                       |
| module         | Creates a new, generic NgModule definition in the given or default project                            |
| ng-new         | Creates a new project by combining the workspace and application schematics                           |
| pipe           | Creates a new, generic pipe definition in the given or default project                                |
| resolver       | Creates a new, generic resolver definition in the given or default project                            |
| service        | Creates a new, generic service definition in the given or default project                             |
| service-worker | Pass this schematic to the "run" command to create a service worker                                   |
| web-worker     | Creates a new, generic web worker definition in the given or default project                          |
| workspace      | Initializes an empty workspace and adds the necessary dependencies required by an Angular application |

## Disclaimer

While the schematics when executed via the Angular CLI and their associated options are considered stable, the programmatic APIs are not considered officially supported and are not subject to the breaking change guarantees of SemVer.
