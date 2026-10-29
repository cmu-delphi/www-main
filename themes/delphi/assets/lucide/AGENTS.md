# Lucide icons

Unmodified SVG files from [lucide-static](https://www.npmjs.com/package/lucide-static) v1.57.0, used under the ISC license in `LICENSE.md`.

The `font-awesome.html` partial inlines these files when it gets a `lucide/<name>` argument, for example `{{ partial "font-awesome.html" "lucide/database" }}`.
The contact page (`layouts/_default/contact.html`) uses them for the option cards and the link arrows.

To add an icon, copy `icons/<name>.svg` from the same lucide-static version into this folder.
The icons use `stroke="currentColor"`, so set their color with the CSS `color` property.
