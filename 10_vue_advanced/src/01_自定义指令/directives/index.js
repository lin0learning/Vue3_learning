import directiveUnit from "./unit"
import directiveFocus from "./focus"
import directiveFtime from "./ftime"

export default function directives(app) {
    directiveUnit(app)
    directiveFocus(app)
    directiveFtime(app)
}