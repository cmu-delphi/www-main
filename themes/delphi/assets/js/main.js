import UIkit from "uikit/dist/js/uikit.js";
import plugin from "uikit/dist/js/uikit-icons.js";
import "./feedback-button";
import "./contact_form";
UIkit.use(plugin);

// re export for COVIDcast
window.UIkit = UIkit;
// define for covidcast at which base url it is embedded
window.DELPHI_COVIDCAST_PAGE = "/covidcast/";
