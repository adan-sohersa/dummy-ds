# React Design System

## About

This package centralize the management of the **Design System Components** for **React**, working like a *wrapper* for the currently in use *Components Library*. 

## Setup

Since this package is currently wrapping the **NextUI** *Components Library*, the setup is pretty much the same than the described in its documentation; based on the elements provided by this library, though.

### Installation

Include the package in your dependencies via your preferred package manager.

		npm i @adan-sohersa/dummy-design-system

### Tailwind Setup

Since, **NextUI** works with **Tailwind**, its required to updated the *content* key, such as the *darkMode* and the *pluggins* one with the values provided below.

### Provider Setup

Finally, its required to **wrapp** the entry point of your app with the package provider. Since the package provider wraps the `NextUIProvider` and the `ThemeProvider` (from `next-themes`), no additonal setup is required for enabling the *darkMode* in your app.