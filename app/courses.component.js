System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, CoursesComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            CoursesComponent = (function () {
                function CoursesComponent() {
                    this.title = "The title of courses page";
                    this.courses = ["Course1", "Course2", "Course3"];
                }
                return CoursesComponent;
            }());
            CoursesComponent = __decorate([
                core_1.Component({
                    selector: 'courses',
                    template: "\n    <h2>Courses</h2>\n    {{title}}\n    <ul>\n        <li *ngFor=\"#course of courses\"></li>\n    </ul>\n\n    "
                })
            ], CoursesComponent);
            exports_1("CoursesComponent", CoursesComponent);
        }
    };
});
//# sourceMappingURL=courses.component.js.map