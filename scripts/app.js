"use strict";

function TodoCtrl($scope) {
    $scope.todos = [{ text: "learn angular", done: !0 }, { text: "build an angular app", done: !1 }], $scope.addTodo = function() { $scope.todos.push({ text: $scope.todoText, done: !1 }), $scope.todoText = "" }, $scope.remaining = function() { var count = 0; return angular.forEach($scope.todos, function(todo) { count += todo.done ? 0 : 1 }), count }, $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [], angular.forEach(oldTodos, function(todo) { todo.done || $scope.todos.push(todo) })
    }
}
$(document).ready(function() {}),
    function() {
        var app;
        app = angular.module("angular-animate", []), app.controller("animate-controller", function($scope) { $scope.animate = !0, $scope.animate2 = !0, $scope.animate3 = !0, $scope.animate4 = !0, $scope.animate5 = !0, $scope.animate6 = !0, $scope.animate7 = !0, $scope.animate8 = !0, $scope.animate9 = !0, $scope.animate10 = !0, $scope.animate11 = !0, $scope.animate12 = !0, $scope.animate13 = !0, $scope.animate14 = !0, $scope.animate15 = !0 })
    }.call(this), angular.module("Angular2AdminApp", ["ngRoute", "ngAnimate", "ngSanitize", "ui.bootstrap", "easypiechart", "textAngular", "ui.tree", "ngMap", "ngTagsInput", "slick", "ui.select", "selectApp", "ui.calendar", "tablesorting", "inlineedittable", "TodoApp", "app.controllers", "app.directives", "app.localization", "app.nav", "app.ui.ctrls", "app.ui.directives", "app.form.validation", "app.ui.form.ctrls", "app.ui.form.directives", "app.tables", "app.task", "app.chart.ctrl", "app.chart.directives", "angular-animate", "app.calendar", "app.ui.jvectormap", "xeditable", "FullscreenApp", "galleryApp"]).config(["$routeProvider", function($routeProvider) { var routes, setRoutes; return routes = ["dashboard/dashboard-v1", "dashboard/dashboard-v2", "dashboard/dashboard-v3", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/timeline", "ui/nested-lists", "ui/fontawesome", "ui/animation", "ui/panel", "ui/xeditable", "maps/gmap", "maps/vectormap", "tables/static", "tables/dynamic", "tables/responsive", "forms/elements", "forms/layouts", "forms/validation", "forms/select", "forms/wizard", "charts/charts", "charts/flot", "charts/morris", "charts/highcharts", "pages/404", "pages/500", "pages/blank", "pages/forgot-password", "pages/invoice", "pages/lock-screen", "pages/profile", "pages/signin", "pages/signup", "pages/directory", "pages/faq", "pages/gallery", "mail/compose", "mail/inbox", "mail/mailview", "tasks/tasks", "calender/calender", "layout/app-v1", "layout/full-width", "layout/app-v2", "ecommerce/dashboard", "ecommerce/orders", "ecommerce/order-views", "ecommerce/products", "ngtable/ngtable", "settings/settings-panel"], setRoutes = function(route) { var config, url; return url = "/" + route, config = { templateUrl: "views/" + route + ".html" }, $routeProvider.when(url, config), $routeProvider }, routes.forEach(function(route) { return setRoutes(route) }), $routeProvider.when("/", { redirectTo: "dashboard/dashboard-v1" }).when("/404", { templateUrl: "views/pages/404.html" }).otherwise({ redirectTo: "/404" }) }]),
    function() { angular.module("app.calendar", ["ui.calendar", "ui.bootstrap"]) }(),
    function() {
        var calendarCtrl;
        calendarCtrl = function($scope) {
            var d, date, m, y;
            date = new Date, d = date.getDate(), m = date.getMonth(), y = date.getFullYear(), $scope.events = [{ title: "All Day Event", start: new Date(y, m, 1) }, { title: "Long Event", start: new Date(y, m, d - 5), end: new Date(y, m, d - 2) }, { title: "Go Hiking", start: new Date(y, m, d - 1), className: ["fc-event-warning"] }, { id: 999, title: "Repeating Event", start: new Date(y, m, d - 3, 16, 0), allDay: !1, className: ["fc-event-success"] }, { id: 999, title: "Repeating Event", start: new Date(y, m, d + 4, 16, 0), allDay: !1, className: ["fc-event-success"] }, { title: "Birthday Party", start: new Date(y, m, d + 1, 11, 0), end: new Date(y, m, d + 1, 12, 30), allDay: !1, className: ["fc-event-danger"] }, { title: "Shopping", start: new Date(y, m, d + 2, 9, 0), end: new Date(y, m, d + 2, 12, 0), allDay: !1, className: ["fc-event-success"] }, { title: "Click for Google", start: new Date(y, m, 28), end: new Date(y, m, 29), url: "http://google.com/" }, { title: "Shopping", start: new Date(y, m + 1, 8) }], $scope.calEventsExt = { color: "#f00", textColor: "yellow", events: [{ type: "party", title: "Lunch", start: new Date(y, m, d, 12, 0), end: new Date(y, m, d, 14, 0), allDay: !1 }, { type: "party", title: "Lunch 2", start: new Date(y, m, d, 12, 0), end: new Date(y, m, d, 14, 0), allDay: !1 }, { type: "party", title: "Click for Google", start: new Date(y, m, 28), end: new Date(y, m, 29), url: "http://google.com/" }] }, $scope.alertOnEventClick = function(event) { $scope.alertMessage = event.title + " was clicked " }, $scope.alertOnDrop = function(event) { $scope.alertMessage = "Event Droped on " + event.start.format() }, $scope.alertOnResize = function(event) { $scope.alertMessage = "Event end date was moved to " + event.end.format() }, $scope.addRemoveEventSource = function(sources, source) {
                var canAdd;
                canAdd = 0, angular.forEach(sources, function(value, key) { sources[key] === source && (sources.splice(key, 1), canAdd = 1) }), 0 === canAdd && sources.push(source)
            }, $scope.addEvent = function() { $scope.events.push({ title: "New Event", start: new Date(y, m, d), end: new Date(y, m, d + 1) }) }, $scope.remove = function(index) { $scope.events.splice(index, 1) }, $scope.changeView = function(view) { $scope.myCalendar1.fullCalendar("changeView", view) }, $scope.renderCalender = function(view, calendar) { calendar && calendar.fullCalendar("render") }, $scope.uiConfig = { calendar: { height: 575, editable: !0, header: { left: "prev,next today", center: "title", right: "month,basicWeek,basicDay" }, eventClick: $scope.alertOnEventClick, eventDrop: $scope.alertOnDrop, eventResize: $scope.alertOnResize } }, $scope.eventSources = [$scope.events]
        }, angular.module("app.calendar").controller("calendarCtrl", ["$scope", calendarCtrl])
    }(), angular.module("ui.calendar", []).constant("uiCalendarConfig", {}).controller("uiCalendarCtrl", ["$scope", "$timeout", function($scope, $timeout) {
        var sourceSerialId = 1,
            eventSerialId = 1,
            sources = $scope.eventSources,
            extraEventSignature = $scope.calendarWatchEvent ? $scope.calendarWatchEvent : angular.noop,
            wrapFunctionWithScopeApply = function(functionToWrap) {
                var wrapper;
                return functionToWrap && (wrapper = function() {
                    var args = arguments;
                    $timeout(function() { functionToWrap.apply(this, args) })
                }), wrapper
            };
        this.eventsFingerprint = function(e) { return e.__uiCalId || (e.__uiCalId = eventSerialId++), "" + e.__uiCalId + (e.id || "") + (e.title || "") + (e.url || "") + (+e.start || "") + (+e.end || "") + (e.allDay || "") + (e.className || "") + extraEventSignature(e) || "" }, this.sourcesFingerprint = function(source) { return source.__id || (source.__id = sourceSerialId++) }, this.allEvents = function() {
            for (var arraySources = [], i = 0, srcLen = sources.length; srcLen > i; i++) {
                var source = sources[i];
                if (angular.isArray(source)) arraySources.push(source);
                else if (angular.isObject(source) && angular.isArray(source.events)) {
                    var extEvent = {};
                    for (var key in source) "_uiCalId" !== key && "events" !== key && (extEvent[key] = source[key]);
                    for (var eI = 0; eI < source.events.length; eI++) angular.extend(source.events[eI], extEvent);
                    arraySources.push(source.events)
                }
            }
            return Array.prototype.concat.apply([], arraySources)
        }, this.changeWatcher = function(arraySource, tokenFn) {
            var self, getTokens = function() { for (var token, el, array = angular.isFunction(arraySource) ? arraySource() : arraySource, result = [], i = 0, n = array.length; n > i; i++) el = array[i], token = tokenFn(el), map[token] = el, result.push(token); return result },
                subtractAsSets = function(a, b) {
                    var i, n, result = [],
                        inB = {};
                    for (i = 0, n = b.length; n > i; i++) inB[b[i]] = !0;
                    for (i = 0, n = a.length; n > i; i++) inB[a[i]] || result.push(a[i]);
                    return result
                },
                map = {},
                applyChanges = function(newTokens, oldTokens) {
                    var i, n, el, token, replacedTokens = {},
                        removedTokens = subtractAsSets(oldTokens, newTokens);
                    for (i = 0, n = removedTokens.length; n > i; i++) {
                        var removedToken = removedTokens[i];
                        el = map[removedToken], delete map[removedToken];
                        var newToken = tokenFn(el);
                        newToken === removedToken ? self.onRemoved(el) : (replacedTokens[newToken] = removedToken, self.onChanged(el))
                    }
                    var addedTokens = subtractAsSets(newTokens, oldTokens);
                    for (i = 0, n = addedTokens.length; n > i; i++) token = addedTokens[i], el = map[token], replacedTokens[token] || self.onAdded(el)
                };
            return self = { subscribe: function(scope, onChanged) { scope.$watch(getTokens, function(newTokens, oldTokens) { onChanged && onChanged(newTokens, oldTokens) === !1 || applyChanges(newTokens, oldTokens) }, !0) }, onAdded: angular.noop, onChanged: angular.noop, onRemoved: angular.noop }
        }, this.getFullCalendarConfig = function(calendarSettings, uiCalendarConfig) { var config = {}; return angular.extend(config, uiCalendarConfig), angular.extend(config, calendarSettings), angular.forEach(config, function(value, key) { "function" == typeof value && (config[key] = wrapFunctionWithScopeApply(config[key])) }), config }
    }]).directive("uiCalendar", ["uiCalendarConfig", "$locale", function(uiCalendarConfig, $locale) {
        var tValues = function(data) {
                var r, k;
                r = [];
                for (k in data) r[k] = data[k];
                return r
            },
            dtf = $locale.DATETIME_FORMATS;
        return uiCalendarConfig = angular.extend({ monthNames: tValues(dtf.MONTH), monthNamesShort: tValues(dtf.SHORTMONTH), dayNames: tValues(dtf.DAY), dayNamesShort: tValues(dtf.SHORTDAY) }, uiCalendarConfig || {}), {
            restrict: "A",
            scope: { eventSources: "=ngModel", calendarWatchEvent: "&" },
            controller: "uiCalendarCtrl",
            link: function(scope, elm, attrs, controller) {
                function getOptions() {
                    var fullCalendarConfig, calendarSettings = attrs.uiCalendar ? scope.$parent.$eval(attrs.uiCalendar) : {};
                    fullCalendarConfig = controller.getFullCalendarConfig(calendarSettings, uiCalendarConfig), options = { eventSources: sources }, angular.extend(options, fullCalendarConfig);
                    var options2 = {};
                    for (var o in options) "eventSources" !== o && (options2[o] = options[o]);
                    return JSON.stringify(options2)
                }
                var sources = scope.eventSources,
                    sourcesChanged = !1,
                    eventSourcesWatcher = controller.changeWatcher(sources, controller.sourcesFingerprint),
                    eventsWatcher = controller.changeWatcher(controller.allEvents, controller.eventsFingerprint),
                    options = null;
                scope.destroy = function() { scope.calendar = attrs.calendar ? scope.$parent[attrs.calendar] = elm.html("") : elm.html("") }, scope.init = function() { scope.calendar.fullCalendar(options) }, eventSourcesWatcher.onAdded = function(source) { scope.calendar.fullCalendar("addEventSource", source), sourcesChanged = !0 }, eventSourcesWatcher.onRemoved = function(source) { scope.calendar.fullCalendar("removeEventSource", source), sourcesChanged = !0 }, eventsWatcher.onAdded = function(event) { scope.calendar.fullCalendar("renderEvent", event) }, eventsWatcher.onRemoved = function(event) { scope.calendar.fullCalendar("removeEvents", function(e) { return e === event }) }, eventsWatcher.onChanged = function(event) { scope.calendar.fullCalendar("updateEvent", event) }, eventSourcesWatcher.subscribe(scope), eventsWatcher.subscribe(scope, function() { return sourcesChanged === !0 ? (sourcesChanged = !1, !1) : void 0 }), scope.$watch(getOptions, function() { scope.destroy(), scope.init() })
            }
        }
    }]), angular.module("app.chart.ctrl", []).controller("chartCtrl", ["$scope", function($scope) {
        $scope.easypiechartxs1 = { percent: 45, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.danger, lineCap: "round", size: 80, lineWidth: 7 } }, $scope.easypiechartxs2 = { percent: 60, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.danger, lineCap: "round", size: 80, lineWidth: 7 } }, $scope.easypiechartxs3 = { percent: 75, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.danger, lineCap: "round", size: 80, lineWidth: 7 } }, $scope.easypiechartxs4 = { percent: 80, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.danger, lineCap: "round", size: 80, lineWidth: 7 } }, $scope.easypiechart = { percent: 65, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.danger, lineCap: "round", size: 140, lineWidth: 5 } }, $scope.easypiechart2 = { percent: 35, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.success, lineCap: "round", size: 140, lineWidth: 10 } }, $scope.easypiechart3 = { percent: 68, options: { animate: { duration: 1e3, enabled: !0 }, barColor: $scope.color.info, lineCap: "square", size: 140, lineWidth: 20, scaleLength: 0 } }, $scope.gaugeChart1 = {
            data: { maxValue: 3e3, animationSpeed: 40, val: 1375 },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: { length: .6, strokeWidth: .03, color: "#000000" },
                limitMax: "true",
                colorStart: "#FF7857",
                colorStop: "#FF7857",
                strokeColor: "#EEEEEE",
                generateGradient: !0,
                percentColors: [
                    [0, $scope.color.success],
                    [1, $scope.color.success]
                ]
            }
        }
    }]).controller("morrisChartCtrl", ["$scope", function($scope) {
        var barColor, barData, comboColor, comboData, donutColor, donutData, simpleColor, simpleData;
        simpleData = [{ year: "2008", value: 10 }, { year: "2009", value: 15 }, { year: "2010", value: 5 }, { year: "2011", value: 15 }, { year: "2012", value: 10 }, { year: "2013", value: 15 }], simpleColor = [$scope.color.info], $scope.simple1 = { data: simpleData, type: "line", options: { xkey: "year", ykeys: ["value"], labels: ["Value"], lineWidth: "3", lineColors: simpleColor } }, $scope.simple2 = { data: simpleData, type: "area", options: { xkey: "year", ykeys: ["value"], labels: ["Value"], lineWidth: "3", lineColors: simpleColor } }, comboData = [{ month: "1", a: 400, b: 130 }, { month: "2", a: 350, b: 180 }, { month: "3", a: 400, b: 140 }, { month: "4", a: 400, b: 250 }, { month: "5", a: 450, b: 230 }, { month: "6", a: 550, b: 170 }, { month: "7", a: 480, b: 200 }, { month: "8", a: 550, b: 260 }, { month: "9", a: 500, b: 240 }, { month: "10", a: 610, b: 350 }, { month: "11", a: 520, b: 320 }, { month: "12", a: 570, b: 370 }], comboColor = [$scope.color.success, $scope.color.danger, $scope.color.info], $scope.combo1 = { data: comboData, type: "line", options: { xkey: "month", ykeys: ["a", "b"], labels: ["Value A", "Value B"], lineWidth: "3", lineColors: comboColor } }, $scope.combo2 = { data: comboData, type: "area", options: { xkey: "month", ykeys: ["a", "b"], labels: ["Value A", "Value B"], lineWidth: "2", lineColors: comboColor } }, barData = [{ year: "2009", a: 20, b: 16, c: 12 }, { year: "2010", a: 10, b: 22, c: 30 }, { year: "2011", a: 5, b: 14, c: 20 }, { year: "2012", a: 5, b: 12, c: 19 }, { year: "2013", a: 20, b: 19, c: 13 }, { year: "2014", a: 28, b: 22, c: 20 }], barColor = [$scope.color.danger, $scope.color.warning, $scope.color.success], $scope.bar1 = { data: barData, type: "bar", options: { xkey: "year", ykeys: ["a", "b", "c"], labels: ["Value A", "Value B", "Value C"], barColors: barColor } }, $scope.bar2 = { data: barData, type: "bar", options: { xkey: "year", ykeys: ["a", "b", "c"], labels: ["Value A", "Value B", "Value C"], barColors: barColor, stacked: !0 } }, donutColor = [$scope.color.danger, $scope.color.warning, $scope.color.success, $scope.color.info], donutData = [{ label: "Download Sales", value: 12 }, { label: "In-Store Sales", value: 30 }, { label: "Mail-Order Sales", value: 20 }, { label: "Online Sales", value: 19 }], $scope.donut1 = { data: donutData, type: "donut", options: { xkey: "year" } }, $scope.donut2 = { data: donutData, type: "donut", options: { xkey: "year", colors: donutColor } }, $scope.donut3 = { data: donutData, type: "donut", options: { xkey: "year", formatter: "return '$' + y;" } }
    }]).controller("flotChartCtrl", ["$scope", function($scope) {
        var areaChart, barChart, barChartB, barChartV, i, lineChart1, lineChart2, lineChart3, lineChart4, lineChart5, lineChart6, lineChart7;
        for (lineChart1 = {}, lineChart1.data1 = [
                [1, 400],
                [2, 350],
                [3, 400],
                [4, 400],
                [5, 450],
                [6, 550],
                [7, 480],
                [8, 550],
                [9, 500],
                [10, 610],
                [11, 520],
                [12, 570]
            ], lineChart1.data2 = [
                [1, 130],
                [2, 180],
                [3, 140],
                [4, 250],
                [5, 230],
                [6, 170],
                [7, 200],
                [8, 260],
                [9, 240],
                [10, 270],
                [11, 320],
                [12, 370]
            ], $scope.line1 = {}, $scope.line1.data = [{ data: lineChart1.data1, label: "Credit Card" }, { data: lineChart1.data2, label: "Paypal" }], $scope.line1.options = {
                series: { lines: { show: !0, fill: !0, lineWidth: 2, fillColor: { colors: ["rgba(255,255,255,.0)", "rgba(183,236,240,.8)"] } }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } },
                colors: [$scope.color.info, $scope.color.danger],
                tooltip: !0,
                tooltipOpts: { defaultTheme: !1 },
                grid: { hoverable: !0, clickable: !0, tickColor: "#eeeeee", borderWidth: 1, borderColor: "#eeeeee" },
                xaxis: {
                    ticks: [
                        [1, "Jan."],
                        [2, "Feb."],
                        [3, "Mar."],
                        [4, "Apr."],
                        [5, "May"],
                        [6, "June"],
                        [7, "July"],
                        [8, "Aug."],
                        [9, "Sept."],
                        [10, "Oct."],
                        [11, "Nov."],
                        [12, "Dec."]
                    ]
                }
            }, lineChart2 = {}, lineChart2.data1 = [
                ["Jan", 6],
                ["Feb", 10],
                ["March", 8],
                ["April", 14],
                ["May", 8],
                ["June", 10],
                ["July", 8],
                ["Aug", 12],
                ["Sept", 10],
                ["Oct", 10],
                ["Nov", 8],
                ["Dec", 10]
            ], $scope.line2 = {}, $scope.line2.data = [{ data: lineChart2.data1, label: "New Visitors" }], $scope.line2.options = { series: { lines: { show: !0, lineWidth: 2, color: "#6BCCB4", fill: !0 }, points: { show: !0, lineWidth: 1, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.dark], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, lineChart3 = {}, lineChart3.data1 = [
                ["Jan", 6],
                ["Feb", 8],
                ["March", 12],
                ["April", 10],
                ["May", 6],
                ["June", 8],
                ["July", 12],
                ["Aug", 10],
                ["Sept", 8],
                ["Oct", 10],
                ["Nov", 8],
                ["Dec", 10]
            ], $scope.line3 = {}, $scope.line3.data = [{ data: lineChart3.data1, label: "New Orders" }], $scope.line3.options = { series: { lines: { show: !0, lineWidth: 2, fill: !0 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.danger], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, lineChart4 = {}, lineChart4.data1 = [
                ["Jan", 6],
                ["Feb", 12],
                ["March", 10],
                ["April", 8],
                ["May", 12],
                ["June", 10],
                ["July", 8],
                ["Aug", 12],
                ["Sept", 6],
                ["Oct", 8],
                ["Nov", 6],
                ["Dec", 10]
            ], $scope.line4 = {}, $scope.line4.data = [{ data: lineChart4.data1, label: "Total Sales" }], $scope.line4.options = { series: { lines: { show: !0, lineWidth: 2, fill: !0 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.info], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, lineChart5 = {}, lineChart5.data1 = [
                ["Jan", 12],
                ["Feb", 8],
                ["March", 6],
                ["April", 8],
                ["May", 4],
                ["June", 6],
                ["July", 8],
                ["Aug", 12],
                ["Sept", 6],
                ["Oct", 8],
                ["Nov", 6],
                ["Dec", 10]
            ], $scope.line5 = {}, $scope.line5.data = [{ data: lineChart5.data1, label: "Customer feedback" }], $scope.line5.options = { series: { lines: { show: !0, lineWidth: 2, fill: !1 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.warning], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, lineChart6 = {}, lineChart6.data1 = [
                ["Jan", 5],
                ["Feb", 8],
                ["March", 6],
                ["April", 9],
                ["May", 7],
                ["June", 4],
                ["July", 8],
                ["Aug", 12],
                ["Sept", 6],
                ["Oct", 8],
                ["Nov", 6],
                ["Dec", 10]
            ], $scope.line6 = {}, $scope.line6.data = [{ data: lineChart6.data1, label: "Net Earning" }], $scope.line6.options = { series: { lines: { show: !0, lineWidth: 2, fill: !1 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.primary], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, lineChart7 = {}, lineChart7.data1 = [
                ["Mon", 4],
                ["Tue", 8],
                ["Wed", 10],
                ["Thu", 8],
                ["Fri", 9],
                ["Sat", 7]
            ], $scope.line7 = {}, $scope.line7.data = [{ data: lineChart7.data1, label: "Server Performance" }], $scope.line7.options = { series: { lines: { show: !0, lineWidth: 2, fill: !1 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 } }, colors: [$scope.color.success], tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { mode: "categories" }, grid: { hoverable: !0, clickable: !0, tickColor: "#eee", borderWidth: 1, borderColor: "#eeeeee" } }, areaChart = {}, areaChart.data1 = [
                [1, 400],
                [2, 350],
                [3, 400],
                [4, 400],
                [5, 450],
                [6, 550],
                [7, 480],
                [8, 550],
                [9, 500],
                [10, 610],
                [11, 520],
                [12, 570]
            ], areaChart.data2 = [
                [1, 200],
                [2, 250],
                [3, 240],
                [4, 280],
                [5, 230],
                [6, 250],
                [7, 200],
                [8, 300],
                [9, 240],
                [10, 300],
                [11, 320],
                [12, 370]
            ], $scope.area = {}, $scope.area.data = [{ data: areaChart.data1, label: "Value A", lines: { fill: !0 }, points: { show: !0 } }, { data: areaChart.data2, label: "Value B", lines: { fill: !1 }, points: { show: !0 }, yaxis: 2 }], $scope.area.options = { series: { lines: { show: !0, fill: !1 }, points: { show: !0, lineWidth: 2, fill: !0, fillColor: "#ffffff", symbol: "circle", radius: 5 }, shadowSize: 0 }, grid: { hoverable: !1, clickable: !1, tickColor: "#eeeeee", borderWidth: 1, borderColor: "#eeeeee" }, colors: [$scope.color.info, $scope.color.success], tooltip: !0, tooltipOpts: { defaultTheme: !0 }, xaxis: { mode: "time" }, yaxes: [{}, { position: "right" }] }, barChart = {}, barChart.data1 = [
                [1, 20],
                [2, 10],
                [3, 5],
                [4, 5],
                [5, 20],
                [6, 28]
            ], barChart.data2 = [
                [1, 16],
                [2, 22],
                [3, 14],
                [4, 12],
                [5, 19],
                [6, 22]
            ], barChart.data3 = [
                [1, 12],
                [2, 30],
                [3, 20],
                [4, 19],
                [5, 13],
                [6, 20]
            ], $scope.barChart = {}, $scope.barChart.data = [{ label: "Value A", data: barChart.data1 }, { label: "Value B", data: barChart.data2 }, { label: "Value C", data: barChart.data3 }], $scope.barChart.options = { series: { stack: !0, bars: { show: !0, fill: 1, barWidth: .4, horizontal: !1, order: 1 } }, grid: { hoverable: !0, borderWidth: 1, tickColor: "#eeeeee", borderColor: "#eeeeee" }, tooltip: !0, tooltipOpts: { defaultTheme: !1 }, colors: [$scope.color.success, $scope.color.warning, $scope.color.danger] }, barChartV = {}, barChartV.data1 = [], i = 0; 20 > i;) barChartV.data1.push([i, Math.sin(i)]), ++i;
        return $scope.barChart3 = {}, $scope.barChart3.data = [{ label: "Value A", data: barChartV.data1 }], $scope.barChart3.options = { series: { stack: !0, bars: { show: !0, fillColor: { colors: [{ opacity: .5 }, { opacity: .9 }] }, barWidth: .6, horizontal: !1 } }, grid: { hoverable: !0, borderWidth: 1, tickColor: "#eeeeee", borderColor: "#eeeeee" }, tooltip: !0, tooltipOpts: { defaultTheme: !1 }, yaxis: { font: { color: "#ccc" }, min: -2, max: 2 }, colors: [$scope.color.info] }, barChartB = {}, barChartB.data1 = [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8],
            [5, 9],
            [6, 12],
            [7, 9],
            [8, 8],
            [9, 7],
            [10, 6],
            [11, 5]
        ], $scope.barChart4 = {}, $scope.barChart4.data = [{ label: "Value A", data: barChartB.data1 }], $scope.barChart4.options = { series: { stack: !0, bars: { show: !0, fillColor: { colors: [{ opacity: .5 }, { opacity: .9 }] }, barWidth: .6, horizontal: !1 } }, grid: { hoverable: !0, borderWidth: 1, tickColor: "#eeeeee", borderColor: "#eeeeee" }, tooltip: !0, tooltipOpts: { defaultTheme: !1 }, xaxis: { font: { color: "#ccc" } }, yaxis: { font: { color: "#ccc" } }, colors: [$scope.color.info] }, $scope.pieChart = {}, $scope.pieChart.data = [{ label: "Download Sales", data: 12 }, { label: "In-Store Sales", data: 30 }, { label: "Mail-Order Sales", data: 20 }, { label: "Online Sales", data: 19 }], $scope.pieChart.options = { series: { pie: { show: !0 } }, legend: { show: !0 }, grid: { hoverable: !0, clickable: !0 }, colors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], tooltip: !0, tooltipOpts: { content: "%p.0%, %s", defaultTheme: !1 } }, $scope.donutChart = {}, $scope.donutChart.data = [{ label: "Download Sales", data: 12 }, { label: "In-Store Sales", data: 30 }, { label: "Mail-Order Sales", data: 20 }, { label: "Online Sales", data: 19 }], $scope.donutChart.options = { series: { pie: { show: !0, innerRadius: .6 } }, legend: { show: !0 }, grid: { hoverable: !0, clickable: !0 }, colors: ["#91C854", "#00B1E1", "#63D3E9", "#FFD66A", "#ED5466", "#6BCCB4"], tooltip: !0, tooltipOpts: { content: "%p.0%, %s", defaultTheme: !1 } }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{ label: "Download Sales", data: 12 }, { label: "In-Store Sales", data: 30 }, { label: "Mail-Order Sales", data: 20 }, { label: "Online Sales", data: 19 }, { label: "Direct Sales", data: 15 }], $scope.donutChart2.options = { series: { pie: { show: !0, innerRadius: .45 } }, legend: { show: !1 }, grid: { hoverable: !0, clickable: !0 }, colors: [$scope.color.danger, $scope.color.info, $scope.color.success, $scope.color.warning, $scope.color.primary], tooltip: !0, tooltipOpts: { content: "%p.0%, %s", defaultTheme: !1 } }
    }]).controller("sparklineCtrl", ["$scope", function($scope) { $scope.demoData1 = { data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7], options: { type: "line", lineColor: "#fff", highlightLineColor: "#fff", fillColor: $scope.color.success, spotColor: !1, minSpotColor: !1, maxSpotColor: !1, width: "100%", height: "150px" } }, $scope.datagraph = { data: [50.32, 45.23, 47.56, 36.25, 75.85, 40.15, 41.25, 50.15, 57.14, 36.15, 97.26, 50.15, 45.32, 47.19], options: { type: "line", width: "100%", height: "65px", lineWidth: 3, lineColor: "#fff", highlightLineColor: "#fff", fillColor: "", valueSpots: { "0:": "#fff" }, spotColor: $scope.color.danger, spotRadius: 3, minSpotColor: $scope.color.danger, maxSpotColor: $scope.color.danger } }, $scope.datagraphbar = { data: [5.6, 6, 7, 8, 7, 8.2, 8.7, 9, 11, 12, 11, 9, 8.7, 8.2, 7, 8, 7, 6, 5.6], options: { type: "bar", width: "100%", height: "45px", barWidth: 6, barSpacing: 6, barColor: $scope.color.warning } }, $scope.analyticschartinfo = { data: [5, 6, 7, 10, 12, 16, 11, 9, 8.9, 8.7, 7, 8, 7], options: { type: "bar", width: "100%", height: "30px", barColor: $scope.color.info } }, $scope.analyticschartdanger = { data: [14, 11, 8.7, 7, 8, 7, 6, 8, 5, 8, 7, 10, 12], options: { type: "bar", width: "100%", height: "30px", barColor: $scope.color.danger } }, $scope.analyticschartwarning = { data: [5, 6, 7, 10, 12, 14, 11, 9, 8.9, 8.7, 7, 8, 7, 6, 5.6], options: { type: "bar", width: "100%", height: "30px", barColor: $scope.color.warning } }, $scope.analyticschartsuccess = { data: [5, 6, 7, 10, 12, 14, 11, 9, 8.9, 8.7, 7, 8, 7, 6, 5.6], options: { type: "bar", width: "100%", height: "30px", barColor: $scope.color.success } }, $scope.largeChart1 = { data: [50.32, 45.23, 47.56, 36.25, 53.85, 40.15, 41.25, 50.15, 57.14, 36.15, 97.26, 50.15, 45.32, 47.19, 37.75, 25.15, 56.34, 50.35, 47.25, 53.15], options: { type: "line", lineWidth: 3, lineColor: $scope.color.info, fillColor: $scope.color.info, spotColor: $scope.color.danger, highlightLineColor: "#fff", spotRadius: 2, minSpotColor: $scope.color.danger, maxSpotColor: $scope.color.danger, width: "100%", height: "150px" } }, $scope.largeChart2 = { data: [5.6, 6, 7, 8, 7, 8.2, 8.7, 9, 11, 12, 11, 9, 8.7, 8.2, 7, 8, 7, 6, 5.6], options: { type: "bar", barColor: $scope.color.success, barWidth: 12, width: "100%", height: "150px" } }, $scope.simpleChart2 = { data: [5, 6, 7, 10, 12, 14, 11, 9, 8.9, 8.7, 7, 8, 7, 6, 5.6], options: { type: "bar", width: "100%", height: "30px", barColor: $scope.color.info } }, $scope.simpleChart3 = { data: [4, 3, 2], options: { type: "pie", width: "30px", height: "30px", sliceColors: [$scope.color.infoAlt, $scope.color.danger, $scope.color.success] } }, $scope.largeChart3 = { data: [3, 2], options: { type: "pie", sliceColors: [$scope.color.success, $scope.color.infoAlt], width: "150px", height: "150px" } } }]), angular.module("app.chart.directives", []).directive("gaugeChart", [function() { return { restrict: "A", scope: { data: "=", options: "=" }, link: function(scope, ele) { var data, gauge, options; return data = scope.data, options = scope.options, gauge = new Gauge(ele[0]).setOptions(options), gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val) } } }]).directive("flotChart", [function() { return { restrict: "A", scope: { data: "=", options: "=" }, link: function(scope, ele) { var data, options, plot; return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options) } } }]).directive("flotChartRealtime", [function() { return { restrict: "A", link: function(scope, ele) { var data, getRandomData, plot, totalPoints, update, updateInterval; return data = [], totalPoints = 500, getRandomData = function() { var i, prev, res, y; for (data.length > 0 && (data = data.slice(1)); data.length < totalPoints;) prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + 10 * Math.random() - 5, 0 > y ? y = 0 : y > 100 && (y = 100), data.push(y); for (res = [], i = 0; i < data.length;) res.push([i, data[i]]), ++i; return res }, update = function() { plot.setData([getRandomData()]), plot.draw(), setTimeout(update, updateInterval) }, data = [], totalPoints = 500, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], { series: { lines: { show: !0, fill: !1 }, shadowSize: 0 }, yaxis: { min: 0, max: 100 }, xaxis: { show: !1 }, grid: { hoverable: !0, borderWidth: 1, borderColor: "#eeeeee" }, colors: ["#70b1cf"] }), update() } } }]).directive("sparkline", [function() { return { restrict: "A", scope: { data: "=", options: "=" }, link: function(scope, ele) { var data, options, sparklineDraw; return data = scope.data, options = scope.options, sparklineDraw = function() { return ele.sparkline(data, options) }, $(window).resize(function() { var sparkResize; return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200) }), sparklineDraw() } } }]).directive("morrisChart", [function() {
        return {
            restrict: "A",
            scope: { data: "=", type: "=", options: "=" },
            link: function(scope, ele) {
                var data, func, options, type;
                switch (data = scope.data, type = scope.type) {
                    case "line":
                        return options = angular.extend({ element: ele[0], data: data }, scope.options), new Morris.Line(options);
                    case "area":
                        return options = angular.extend({ element: ele[0], data: data }, scope.options), new Morris.Area(options);
                    case "bar":
                        return options = angular.extend({ element: ele[0], data: data }, scope.options), new Morris.Bar(options);
                    case "donut":
                        return options = angular.extend({ element: ele[0], data: data }, scope.options), options.formatter && (func = new Function("y", "data", options.formatter), options.formatter = func), new Morris.Donut(options)
                }
            }
        }
    }]);
var CartForm;
CartForm = function($scope) { return $scope.invoice = { items: [{ qty: 10, description: "item", cost: 9.95 }] }, $scope.addItem = function() { return $scope.invoice.items.push({ qty: 1, description: "", cost: 0 }) }, $scope.removeItem = function(index) { return $scope.invoice.items.splice(index, 1) }, $scope.total = function() { var total; return total = 0, angular.forEach($scope.invoice.items, function(item) { return total += item.qty * item.cost }), total } };
var SortableTableCtrl;
SortableTableCtrl = function() {
    var scope;
    scope = this, scope.head = { a: "Name", b: "Surname", c: "City" }, scope.body = [{ a: "Hans", b: "Mueller", c: "Leipzig" }, { a: "Dieter", b: "Zumpe", c: "Berlin" }, { a: "Bernd", b: "Danau", c: "Muenchen" }], scope.sort = { column: "b", descending: !1 }, scope.selectedCls = function(column) { return column === scope.sort.column && "sort-" + scope.sort.descending }, scope.changeSorting = function(column) {
        var sort;
        sort = scope.sort, sort.column === column ? sort.descending = !sort.descending : (sort.column = column, sort.descending = !1)
    }
}, angular.module("app.ui.form.ctrls", ["lazyModel"]).controller("lazyModelCtrl", function($scope) { $scope.user = { name: "Square Design" } }).controller("TagsDemoCtrl", ["$scope", function($scope) { return $scope.tags = ["Tag1", "Tag2"] }]).controller("DatepickerDemoCtrl", ["$scope", function($scope) { return $scope.today = function() { return $scope.dt = new Date }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function() { return $scope.showWeeks = !$scope.showWeeks }, $scope.clear = function() { return $scope.dt = null }, $scope.disabled = function(date, mode) { return "day" === mode && (0 === date.getDay() || 6 === date.getDay()) }, $scope.toggleMin = function() { var _ref; return _ref = void 0, $scope.minDate = null != (_ref = $scope.minDate) ? _ref : { "null": new Date } }, $scope.toggleMin(), $scope.open = function($event) { return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0 }, $scope.dateOptions = { "year-format": "'yy'", "starting-day": 1 }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0] }]).controller("TimepickerDemoCtrl", ["$scope", function($scope) { return $scope.mytime = new Date, $scope.hstep = 1, $scope.mstep = 15, $scope.options = { hstep: [1, 2, 3, 4, 5], mstep: [1, 5, 10, 15, 25, 30] }, $scope.ismeridian = !0, $scope.toggleMode = function() { return $scope.ismeridian = !$scope.ismeridian }, $scope.update = function() { var d; return d = void 0, d = new Date, d.setHours(14), d.setMinutes(0), $scope.mytime = d }, $scope.changed = function() { return void 0 }, $scope.clear = function() { return $scope.mytime = null } }]).controller("TypeaheadCtrl", ["$scope", function($scope) { return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"] }]).controller("RatingDemoCtrl", ["$scope", function($scope) { return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function(value) { $scope.overStar = value, $scope.percent = 100 * (value / $scope.max) }, $scope.ratingStates = [{ stateOn: "glyphicon-ok-sign", stateOff: "glyphicon-ok-circle" }, { stateOn: "glyphicon-star", stateOff: "glyphicon-star-empty" }, { stateOn: "glyphicon-heart", stateOff: "glyphicon-ban-circle" }, { stateOn: "glyphicon-heart" }, { stateOff: "glyphicon-off" }] }]), angular.module("app.ui.form.directives", []).directive("uiRangeSlider", [function() { return { restrict: "A", link: function(scope, ele) { return ele.slider() } } }]).directive("uiFileUpload", [function() { return { restrict: "A", link: function(scope, ele) { return ele.bootstrapFileInput() } } }]).directive("uiSpinner", [function() { return { restrict: "A", compile: function(ele) { return ele.addClass("ui-spinner"), { post: function() { return ele.spinner() } } } } }]).directive("uiWizardForm", [function() { return { link: function(scope, ele) { return ele.steps() } } }]), angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope", function($scope) { return $scope.wizard = { firstName: "some name", lastName: "", email: "", password: "", age: "", address: "" }, $scope.isValidateStep1 = function() { return void 0 }, $scope.finishedWizard = function() { return void 0 } }]).controller("formConstraintsCtrl", ["$scope", function($scope) {
    var original;
    return original = void 0, $scope.form = { required: "", minlength: "", maxlength: "", length_rage: "", type_something: "", confirm_type: "", foo: "", email: "", url: "", num: "", minVal: "", maxVal: "", valRange: "", pattern: "" }, original = angular.copy($scope.form), $scope.revert = function() {
        return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine()
    }, $scope.canRevert = function() { return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine }, $scope.canSubmit = function() { return $scope.form_constraints.$valid && !angular.equals($scope.form, original) }
}]).controller("signinCtrl", ["$scope", function($scope) { var original; return $scope.user = { email: "", password: "" }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() { return $scope.user = angular.copy(original), $scope.form_signin.$setPristine() }, $scope.canRevert = function() { return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine }, $scope.canSubmit = function() { return $scope.form_signin.$valid && !angular.equals($scope.user, original) }, $scope.submitForm = function() { return $scope.showInfoOnSubmit = !0, $scope.revert() } }]).controller("signupCtrl", ["$scope", function($scope) { var original; return original = void 0, $scope.user = { name: "", email: "", password: "", confirmPassword: "", age: "" }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() { return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine() }, $scope.canRevert = function() { return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine }, $scope.canSubmit = function() { return $scope.form_signup.$valid && !angular.equals($scope.user, original) }, $scope.submitForm = function() { return $scope.showInfoOnSubmit = !0, $scope.revert() } }]).directive("validateEquals", [function() { return { require: "ngModel", link: function(scope, ele, attrs, ngModelCtrl) { var validateEqual; return validateEqual = function(value) { var valid; return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({ value: void 0 }) : void 0 }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function(newValue, oldValue) { return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0 }) } } }]);
var app;
app = angular.module("selectApp", ["ngSanitize", "ui.select"]), app.filter("propsFilter", function() {
    return function(items, props) {
        var out;
        return out = [], angular.isArray(items) ? items.forEach(function(item) {
            var i, itemMatches, keys, prop, text;
            for (itemMatches = !1, keys = Object.keys(props), i = 0; i < keys.length;) {
                if (prop = keys[i], text = props[prop].toLowerCase(), -1 !== item[prop].toString().toLowerCase().indexOf(text)) { itemMatches = !0; break }
                i++
            }
            itemMatches && out.push(item)
        }) : out = items, out
    }
}), app.controller("SelectCtrl", function($scope, $http, $timeout) { $scope.disabled = void 0, $scope.searchEnabled = void 0, $scope.enable = function() { $scope.disabled = !1 }, $scope.disable = function() { $scope.disabled = !0 }, $scope.enableSearch = function() { $scope.searchEnabled = !0 }, $scope.disableSearch = function() { $scope.searchEnabled = !1 }, $scope.clear = function() { $scope.person.selected = void 0, $scope.address.selected = void 0, $scope.country.selected = void 0 }, $scope.someGroupFn = function(item) { return item.name[0] >= "A" && item.name[0] <= "M" ? "From A - M" : item.name[0] >= "N" && item.name[0] <= "Z" ? "From N - Z" : void 0 }, $scope.personAsync = { selected: "wladimir@email.com" }, $scope.peopleAsync = [], $timeout(function() { $scope.peopleAsync = [{ name: "Adam", email: "adam@email.com", age: 12, country: "United States" }, { name: "Amalie", email: "amalie@email.com", age: 12, country: "Argentina" }, { name: "EstefanÃ­a", email: "estefania@email.com", age: 21, country: "Argentina" }, { name: "Adrian", email: "adrian@email.com", age: 21, country: "Ecuador" }, { name: "Wladimir", email: "wladimir@email.com", age: 30, country: "Ecuador" }, { name: "Samantha", email: "samantha@email.com", age: 30, country: "United States" }, { name: "Nicole", email: "nicole@email.com", age: 43, country: "Colombia" }, { name: "Natasha", email: "natasha@email.com", age: 54, country: "Ecuador" }, { name: "Michael", email: "michael@email.com", age: 15, country: "Colombia" }, { name: "NicolÃ¡s", email: "nicole@email.com", age: 43, country: "Colombia" }] }, 3e3), $scope.counter = 0, $scope.someFunction = function(item, model) { $scope.counter++, $scope.eventResult = { item: item, model: model } }, $scope.removed = function(item, model) { $scope.lastRemoved = { item: item, model: model } }, $scope.tagTransform = function(newTag) { var item; return item = { name: newTag, email: newTag.toLowerCase() + "@email.com", age: "unknown", country: "unknown" } }, $scope.person = {}, $scope.people = [{ name: "Adam", email: "adam@email.com", age: 12, country: "United States" }, { name: "Amalie", email: "amalie@email.com", age: 12, country: "Argentina" }, { name: "EstefanÃ­a", email: "estefania@email.com", age: 21, country: "Argentina" }, { name: "Adrian", email: "adrian@email.com", age: 21, country: "Ecuador" }, { name: "Wladimir", email: "wladimir@email.com", age: 30, country: "Ecuador" }, { name: "Samantha", email: "samantha@email.com", age: 30, country: "United States" }, { name: "Nicole", email: "nicole@email.com", age: 43, country: "Colombia" }, { name: "Natasha", email: "natasha@email.com", age: 54, country: "Ecuador" }, { name: "Michael", email: "michael@email.com", age: 15, country: "Colombia" }, { name: "NicolÃ¡s", email: "nicolas@email.com", age: 43, country: "Colombia" }], $scope.availableColors = ["Red", "Green", "Blue", "Yellow", "Magenta", "Maroon", "Umbra", "Turquoise"], $scope.multipleDemo = {}, $scope.multipleDemo.colors = ["Blue", "Red"], $scope.multipleDemo.colors2 = ["Blue", "Red"], $scope.multipleDemo.selectedPeople = [$scope.people[5], $scope.people[4]], $scope.multipleDemo.selectedPeople2 = $scope.multipleDemo.selectedPeople, $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]], $scope.multipleDemo.selectedPeopleSimple = ["samantha@email.com", "wladimir@email.com"], $scope.address = {}, $scope.refreshAddresses = function(address) { var params; return params = { address: address, sensor: !1 }, $http.get("http://maps.googleapis.com/maps/api/geocode/json", { params: params }).then(function(response) { $scope.addresses = response.data.results }) }, $scope.country = {}, $scope.countries = [{ name: "Afghanistan", code: "AF" }, { name: "Ã…land Islands", code: "AX" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "American Samoa", code: "AS" }, { name: "Andorra", code: "AD" }, { name: "Angola", code: "AO" }, { name: "Anguilla", code: "AI" }, { name: "Antarctica", code: "AQ" }, { name: "Antigua and Barbuda", code: "AG" }, { name: "Argentina", code: "AR" }, { name: "Armenia", code: "AM" }, { name: "Aruba", code: "AW" }, { name: "Australia", code: "AU" }, { name: "Austria", code: "AT" }, { name: "Azerbaijan", code: "AZ" }, { name: "Bahamas", code: "BS" }, { name: "Bahrain", code: "BH" }, { name: "Bangladesh", code: "BD" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Belgium", code: "BE" }, { name: "Belize", code: "BZ" }, { name: "Benin", code: "BJ" }, { name: "Bermuda", code: "BM" }, { name: "Bhutan", code: "BT" }, { name: "Bolivia", code: "BO" }, { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Botswana", code: "BW" }, { name: "Bouvet Island", code: "BV" }, { name: "Brazil", code: "BR" }, { name: "British Indian Ocean Territory", code: "IO" }, { name: "Brunei Darussalam", code: "BN" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" }, { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" }, { name: "Canada", code: "CA" }, { name: "Cape Verde", code: "CV" }, { name: "Cayman Islands", code: "KY" }, { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" }, { name: "Chile", code: "CL" }, { name: "China", code: "CN" }, { name: "Christmas Island", code: "CX" }, { name: "Cocos (Keeling) Islands", code: "CC" }, { name: "Colombia", code: "CO" }, { name: "Comoros", code: "KM" }, { name: "Congo", code: "CG" }, { name: "Congo, The Democratic Republic of the", code: "CD" }, { name: "Cook Islands", code: "CK" }, { name: "Costa Rica", code: "CR" }, { name: "Cote D'Ivoire", code: "CI" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" }, { name: "Cyprus", code: "CY" }, { name: "Czech Republic", code: "CZ" }, { name: "Denmark", code: "DK" }, { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Dominican Republic", code: "DO" }, { name: "Ecuador", code: "EC" }, { name: "Egypt", code: "EG" }, { name: "El Salvador", code: "SV" }, { name: "Equatorial Guinea", code: "GQ" }, { name: "Eritrea", code: "ER" }, { name: "Estonia", code: "EE" }, { name: "Ethiopia", code: "ET" }, { name: "Falkland Islands (Malvinas)", code: "FK" }, { name: "Faroe Islands", code: "FO" }, { name: "Fiji", code: "FJ" }, { name: "Finland", code: "FI" }, { name: "France", code: "FR" }, { name: "French Guiana", code: "GF" }, { name: "French Polynesia", code: "PF" }, { name: "French Southern Territories", code: "TF" }, { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" }, { name: "Georgia", code: "GE" }, { name: "Germany", code: "DE" }, { name: "Ghana", code: "GH" }, { name: "Gibraltar", code: "GI" }, { name: "Greece", code: "GR" }, { name: "Greenland", code: "GL" }, { name: "Grenada", code: "GD" }, { name: "Guadeloupe", code: "GP" }, { name: "Guam", code: "GU" }, { name: "Guatemala", code: "GT" }, { name: "Guernsey", code: "GG" }, { name: "Guinea", code: "GN" }, { name: "Guinea-Bissau", code: "GW" }, { name: "Guyana", code: "GY" }, { name: "Haiti", code: "HT" }, { name: "Heard Island and Mcdonald Islands", code: "HM" }, { name: "Holy See (Vatican City State)", code: "VA" }, { name: "Honduras", code: "HN" }, { name: "Hong Kong", code: "HK" }, { name: "Hungary", code: "HU" }, { name: "Iceland", code: "IS" }, { name: "India", code: "IN" }, { name: "Indonesia", code: "ID" }, { name: "Iran, Islamic Republic Of", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Ireland", code: "IE" }, { name: "Isle of Man", code: "IM" }, { name: "Israel", code: "IL" }, { name: "Italy", code: "IT" }, { name: "Jamaica", code: "JM" }, { name: "Japan", code: "JP" }, { name: "Jersey", code: "JE" }, { name: "Jordan", code: "JO" }, { name: "Kazakhstan", code: "KZ" }, { name: "Kenya", code: "KE" }, { name: "Kiribati", code: "KI" }, { name: "Korea, Democratic People's Republic of", code: "KP" }, { name: "Korea, Republic of", code: "KR" }, { name: "Kuwait", code: "KW" }, { name: "Kyrgyzstan", code: "KG" }, { name: "Lao People's Democratic Republic", code: "LA" }, { name: "Latvia", code: "LV" }, { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" }, { name: "Liberia", code: "LR" }, { name: "Libyan Arab Jamahiriya", code: "LY" }, { name: "Liechtenstein", code: "LI" }, { name: "Lithuania", code: "LT" }, { name: "Luxembourg", code: "LU" }, { name: "Macao", code: "MO" }, { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" }, { name: "Madagascar", code: "MG" }, { name: "Malawi", code: "MW" }, { name: "Malaysia", code: "MY" }, { name: "Maldives", code: "MV" }, { name: "Mali", code: "ML" }, { name: "Malta", code: "MT" }, { name: "Marshall Islands", code: "MH" }, { name: "Martinique", code: "MQ" }, { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" }, { name: "Mayotte", code: "YT" }, { name: "Mexico", code: "MX" }, { name: "Micronesia, Federated States of", code: "FM" }, { name: "Moldova, Republic of", code: "MD" }, { name: "Monaco", code: "MC" }, { name: "Mongolia", code: "MN" }, { name: "Montserrat", code: "MS" }, { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" }, { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" }, { name: "Nauru", code: "NR" }, { name: "Nepal", code: "NP" }, { name: "Netherlands", code: "NL" }, { name: "Netherlands Antilles", code: "AN" }, { name: "New Caledonia", code: "NC" }, { name: "New Zealand", code: "NZ" }, { name: "Nicaragua", code: "NI" }, { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" }, { name: "Niue", code: "NU" }, { name: "Norfolk Island", code: "NF" }, { name: "Northern Mariana Islands", code: "MP" }, { name: "Norway", code: "NO" }, { name: "Oman", code: "OM" }, { name: "Pakistan", code: "PK" }, { name: "Palau", code: "PW" }, { name: "Palestinian Territory, Occupied", code: "PS" }, { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" }, { name: "Paraguay", code: "PY" }, { name: "Peru", code: "PE" }, { name: "Philippines", code: "PH" }, { name: "Pitcairn", code: "PN" }, { name: "Poland", code: "PL" }, { name: "Portugal", code: "PT" }, { name: "Puerto Rico", code: "PR" }, { name: "Qatar", code: "QA" }, { name: "Reunion", code: "RE" }, { name: "Romania", code: "RO" }, { name: "Russian Federation", code: "RU" }, { name: "Rwanda", code: "RW" }, { name: "Saint Helena", code: "SH" }, { name: "Saint Kitts and Nevis", code: "KN" }, { name: "Saint Lucia", code: "LC" }, { name: "Saint Pierre and Miquelon", code: "PM" }, { name: "Saint Vincent and the Grenadines", code: "VC" }, { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" }, { name: "Sao Tome and Principe", code: "ST" }, { name: "Saudi Arabia", code: "SA" }, { name: "Senegal", code: "SN" }, { name: "Serbia and Montenegro", code: "CS" }, { name: "Seychelles", code: "SC" }, { name: "Sierra Leone", code: "SL" }, { name: "Singapore", code: "SG" }, { name: "Slovakia", code: "SK" }, { name: "Slovenia", code: "SI" }, { name: "Solomon Islands", code: "SB" }, { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "South Georgia and the South Sandwich Islands", code: "GS" }, { name: "Spain", code: "ES" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" }, { name: "Suriname", code: "SR" }, { name: "Svalbard and Jan Mayen", code: "SJ" }, { name: "Swaziland", code: "SZ" }, { name: "Sweden", code: "SE" }, { name: "Switzerland", code: "CH" }, { name: "Syrian Arab Republic", code: "SY" }, { name: "Taiwan, Province of China", code: "TW" }, { name: "Tajikistan", code: "TJ" }, { name: "Tanzania, United Republic of", code: "TZ" }, { name: "Thailand", code: "TH" }, { name: "Timor-Leste", code: "TL" }, { name: "Togo", code: "TG" }, { name: "Tokelau", code: "TK" }, { name: "Tonga", code: "TO" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" }, { name: "Turkmenistan", code: "TM" }, { name: "Turks and Caicos Islands", code: "TC" }, { name: "Tuvalu", code: "TV" }, { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "United Kingdom", code: "GB" }, { name: "United States", code: "US" }, { name: "United States Minor Outlying Islands", code: "UM" }, { name: "Uruguay", code: "UY" }, { name: "Uzbekistan", code: "UZ" }, { name: "Vanuatu", code: "VU" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: "Virgin Islands, British", code: "VG" }, { name: "Virgin Islands, U.S.", code: "VI" }, { name: "Wallis and Futuna", code: "WF" }, { name: "Western Sahara", code: "EH" }, { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" }, { name: "Zimbabwe", code: "ZW" }] }), angular.module("FullscreenApp", []).directive("fullscreenMode", [function() { return { restrict: "A", template: '<a href="javascript:void(0)" ng-click="toggleFullscreen()" class="expand" id="toggle-fullscreen"> <i class="fa fa-expand"></i> </a>', controller: function($scope) { $scope.toggleFullscreen = function() { $(document).toggleFullScreen(), $("#toggle-fullscreen .fa").toggleClass("fa-expand fa-compress") } } } }]).directive("fullscreenWidget", [function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            element.click(function() {
                var panel = $(this).closest(".panel");
                panel.toggleClass("widget-fullscreen"), $(this).toggleClass("fa-expand fa-compress"), $("body").toggleClass("fullscreen-widget-active")
            })
        }
    }
}]);
var App = angular.module("galleryApp", []);
App.controller("galleryCtrl", function($scope) { $scope.list1 = [{ src: "images/gallery/image1.png", name: "IMG_001.jpg" }, { src: "images/gallery/image2.png", name: "IMG_002.jpg" }, { src: "images/gallery/image3.png", name: "IMG_003.jpg" }, { src: "images/gallery/image4.png", name: "IMG_004.jpg" }, { src: "images/gallery/image5.png", name: "IMG_005.jpg" }, { src: "images/gallery/image1.png", name: "IMG_006.jpg" }, { src: "images/gallery/image2.png", name: "IMG_007.jpg" }, { src: "images/gallery/image3.png", name: "IMG_008.jpg" }, { src: "images/gallery/image4.png", name: "IMG_009.jpg" }, { src: "images/gallery/image5.png", name: "IMG_0010.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0011.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0012.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0013.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0014.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0015.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0016.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0017.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0018.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0019.jpg" }, { src: "images/gallery/image1.png", name: "IMG_0020.jpg" }], $scope.checkAll = function() { $scope.selectedAll = $scope.selectedAll ? !0 : !1, angular.forEach($scope.list1, function(item) { item.Selected = $scope.selectedAll }) } });
var app;
app = angular.module("inlineedittable", ["ngTable"]).controller("inlineeditCtrl", function($scope, $filter, ngTableParams) {
        var data;
        data = [{ id: 1, pn: "product 1", ct: "Mens/Footwear", qt: "125", lm: 138661285100, ln: "Smith", fn: "John", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "On Hold", dl: !1 }, { id: 2, pn: "product 2", ct: "Mens/Footwear", qt: "200", lm: 138661285200, ln: "Taylor", fn: "Lisa", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Processing", dl: !1 }, { id: 3, pn: "product 3", ct: "Mens/Footwear", qt: "350", lm: 138661285300, ln: "Jones", fn: "James", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Cancelled", dl: !1 }, { id: 4, pn: "product 4", ct: "Mens/Footwear", qt: "145", lm: 138661285400, ln: "Wong", fn: "Paul", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Pending", dl: !1 }, { id: 5, pn: "product 5", ct: "Mens/Footwear", qt: "450", lm: 138661285500, ln: "King", fn: "Alice", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Dispatch", dl: !1 }, { id: 6, pn: "product 6", ct: "Mens/Footwear", qt: "650", lm: 138661285600, ln: "Brown", fn: "Jan", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "On Hold", dl: !1 }, { id: 7, pn: "product 7", ct: "Mens/Footwear", qt: "750", lm: 138661285700, ln: "Garcia", fn: "Ami", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Processing", dl: !1 }, { id: 8, pn: "product 8", ct: "Mens/Footwear", qt: "856", lm: 138661285800, ln: "Green", fn: "Jack", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Pending", dl: !1 }, { id: 9, pn: "product 9", ct: "Mens/Footwear", qt: "1425", lm: 138661285900, ln: "Liesen", fn: "Abraham", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Cancelled", dl: !1 }, { id: 10, pn: "product 10", ct: "Mens/Footwear", qt: "2545", lm: 138661286e3, ln: "Bower", fn: "Angela", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Processing", dl: !1 }, { id: 11, pn: "product 11", ct: "Mens/Footwear", qt: "4515", lm: 138661286100, ln: "Davidoff", fn: "Fjodor", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Dispatch", dl: !1 }, { id: 12, pn: "product 12", ct: "Mens/Footwear", qt: "5645", lm: 138661286200, ln: "Vitrovic", fn: "Biljana", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Dispatch", dl: !1 }, { id: 13, pn: "product 13", ct: "Mens/Footwear", qt: "2315", lm: 138661286300, ln: "Valet", fn: "Guillaume", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Dispatch", dl: !1 }, { id: 14, pn: "product 14", ct: "Mens/Footwear", qt: "2112", lm: 138661286400, ln: "Tran", fn: "Min", dc: "2/2/2015", em: "$245.85", ph: "$245.85", ac: "Pending", dl: !1 }], $scope.tableParams = new ngTableParams({ page: 1, count: 10 }, {
            total: data.length,
            getData: function($defer, params) {
                var orderedData;
                orderedData = params.sorting() ? $filter("orderBy")(data, params.orderBy()) : data, $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()))
            }
        }), $scope.editId = -1, $scope.setEditId = function(pid) { $scope.editId = pid }
    }),
    function() {
        var app;
        app = angular.module("tablesorting", ["ngTable"]).controller("ngTableCtrl", function($scope, $filter, ngTableParams) {
            var data;
            data = [{ name: "Moroni", age: 50 }, { name: "Tiancum", age: 43 }, { name: "Jacob", age: 27 }, { name: "Nephi", age: 29 }, { name: "Enos", age: 34 }, { name: "Tiancum", age: 43 }, { name: "Jacob", age: 27 }, { name: "Nephi", age: 29 }, { name: "Enos", age: 34 }, { name: "Tiancum", age: 43 }, { name: "Jacob", age: 27 }, { name: "Nephi", age: 29 }, { name: "Enos", age: 34 }, { name: "Tiancum", age: 43 }, { name: "Jacob", age: 27 }, { name: "Nephi", age: 29 }, { name: "Enos", age: 34 }], $scope.tableParams = new ngTableParams({ page: 1, count: 10, filter: { name: "M" }, sorting: { name: "asc" } }, { total: data.length, getData: function($defer, params) { var orderedData; return orderedData = params.sorting() ? $filter("orderBy")(data, params.orderBy()) : data, orderedData = params.filter() ? $filter("filter")(data, params.filter()) : data, $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())) } }), $scope.editId = -1, $scope.setEditId = function(pid) { $scope.editId = pid }
        })
    }.call(this), angular.module("app.nav", []).directive("toggleNavCollapsedMin", ["$rootScope", function($rootScope) { return { restrict: "A", link: function(scope, ele) { var app; return app = $("#app"), ele.on("click", function(e) { return app.hasClass("nav-collapsed-min") ? app.removeClass("nav-collapsed-min") : (app.addClass("nav-collapsed-min"), $rootScope.$broadcast("nav:reset")), e.preventDefault() }) } } }]).directive("collapseNav", [function() { return { restrict: "A", link: function(scope, ele) { var $a, $aRest, $app, $lists, $listsRest, $nav, $window, prevWidth, updateClass; return $window = $(window), $lists = ele.find("ul").parent("li"), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), $app = $("#app"), $nav = $("#nav-container"), $a.on("click", function(event) { var $parent, $this; return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault()) }), $aRest.on("click", function() { return $lists.removeClass("open").find("ul").slideUp() }), scope.$on("nav:reset", function() { return $lists.removeClass("open").find("ul").slideUp() }), prevWidth = $window.width(), updateClass = function() { var currentWidth; return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth }, $window.resize(function() { var t; return clearTimeout(t), t = setTimeout(updateClass, 300) }) } } }]).directive("toggleOffCanvas", [function() { return { restrict: "A", link: function(scope, ele) { return ele.on("click", function() { return $("#app").toggleClass("on-canvas") }) } } }]), angular.module("app.directives", []).directive("imgHolder", [function() { return { restrict: "A", link: function(scope, ele) { return Holder.run({ images: ele[0] }) } } }]).directive("panelToggle", [function() { return { restrict: "A", link: function(scope, element) { element.click(function() { $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up") }) } } }]).directive("widgetClose", [function() { return { restrict: "A", link: function(scope, element) { element.click(function() { $(this).parent().parent().parent().fadeOut() }) } } }]).directive("toggleProfile", [function() { return { restrict: "A", template: '<a href="javascript:void(0)" ng-click="toggleProfile()"> <i class="fa fa-user"></i> </a>', controller: function($scope) { $scope.toggleProfile = function() { $("#settings").slideToggle() } } } }]).directive("customPage", function() {
        return {
            restrict: "A",
            controller: ["$scope", "$element", "$location", function($scope, $element, $location) {
                var addBg, path;
                return path = function() { return $location.path() }, addBg = function(path) {
                    switch ($element.removeClass("body-wide body-lock"), path) {
                        case "/404":
                        case "/pages/404":
                        case "/pages/500":
                        case "/pages/signin":
                        case "/pages/signup":
                        case "/pages/forgot-password":
                            return $element.addClass("body-wide");
                        case "/pages/lock-screen":
                            return $element.addClass("body-wide body-lock")
                    }
                }, addBg($location.path()), $scope.$watch(path, function(newVal, oldVal) { return newVal !== oldVal ? addBg($location.path()) : void 0 })
            }]
        }
    }).directive("rightSidebar", [function() { return { restrict: "A", link: function(scope, element) { element.click(function() { $(this).hasClass("open") ? ($(".rsidebar").animate({ right: "-250px" }, 150), $(this).removeClass("open").addClass("closed")) : ($(".rsidebar").animate({ right: "0px" }, 150), $(this).removeClass("closed").addClass("open")) }) } } }]).directive("toggleSettings", [function() { return { restrict: "A", link: function(scope, element) { element.click(function() { $(this).hasClass("open") ? ($("#config").animate({ right: "-300px" }, 150), $(this).removeClass("open").addClass("closed")) : ($("#config").animate({ right: "0px" }, 150), $(this).removeClass("closed").addClass("open")) }) } } }]).directive("goBack", [function() { return { restrict: "A", controller: ["$scope", "$element", "$window", function($scope, $element, $window) { return $element.on("click", function() { return $window.history.back() }) }] } }]), angular.module("app.localization", []).factory("localize", ["$http", "$rootScope", "$window", function($http, $rootScope, $window) { var localize; return localize = { language: "", resourceFileLoaded: !1, successCallback: function(data) { return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated") }, setLanguage: function(value) { return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources() }, setUrl: function(value) { return localize.url = value, localize.initLocalizedResources() }, buildUrl: function() { return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js" }, initLocalizedResources: function() { var url; return url = localize.url || localize.buildUrl(), $http({ method: "GET", url: url, cache: !1 }).success(localize.successCallback).error(function() { return $rootScope.$broadcast("localizeResourcesUpdated") }) }, getLocalizedString: function(value) { var result, valueLowerCase; return localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result } } }]).directive("i18n", ["localize", function(localize) { var i18nDirective; return i18nDirective = { restrict: "EA", updateText: function(ele, input, placeholder) { var result; return result = void 0, result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0 }, link: function(scope, ele, attrs) { return scope.$on("localizeResourcesUpdated", function() { return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder) }), attrs.$observe("i18n", function(value) { return i18nDirective.updateText(ele, value, attrs.placeholder) }) } } }]).controller("LangCtrl", ["$scope", "localize", function($scope, localize) {
        return $scope.lang = "English", $scope.setLang = function(lang) {
            switch (lang) {
                case "English":
                    localize.setLanguage("EN-US");
                    break;
                case "Deutsch":
                    localize.setLanguage("DE-DE");
                    break;
                case "franÃ§ais":
                    localize.setLanguage("FR-FR");
                    break;
                case "Italiano":
                    localize.setLanguage("IT-IT");
                    break;
                case "Portugal":
                    localize.setLanguage("PT-BR");
                    break;
                case "??????? ????":
                    localize.setLanguage("RU-RU")
            }
            return $scope.lang = lang
        }
    }]), angular.module("app.controllers", ["angular-loading-bar", "ngTable"]).config(["cfpLoadingBarProvider", function(cfpLoadingBarProvider) { cfpLoadingBarProvider.includeSpinner = !1 }]).controller("AppCtrl", ["$scope", "$rootScope", function($scope) {
        var $window;
        $window = $(window), $scope.main = { brand: "Angular2Admin", name: "Square Design" }, $scope.admin = { layout: !1, menu: !1, fixedHeader: !0, fixedSidebar: !0, themeID: "32", navbarHeaderColor: "bg-primary", navbarlogo: "bg-primary", asideColor: "bg-white" }, $scope.color = { primary: "#248AAF", success: "#3CBC8D", info: "#29B7D3", purple: "#7266ba", warning: "#FAC552", danger: "#E9422E" }
    }]).controller("HeaderCtrl", ["$scope", function() {}]).controller("NavContainerCtrl", ["$scope", function() {}]).controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function($scope, taskStorage, filterFilter) { var tasks; return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, { completed: !1 }).length, $scope.$on("taskRemaining:changed", function(event, count) { return $scope.taskRemainingCount = count }) }]).controller("DashboardCtrl", ["$scope", function() {}]), angular.module("slick", []).directive("slick", function($timeout) { return { restrict: "AEC", scope: { initOnload: "=", data: "=", currentIndex: "=", accessibility: "@", adaptiveHeight: "@", arrows: "@", asNavFor: "@", appendArrows: "@", appendDots: "@", autoplay: "@", autoplaySpeed: "@", centerMode: "@", centerPadding: "@", cssEase: "@", customPaging: "&", dots: "@", draggable: "@", easing: "@", fade: "@", focusOnSelect: "@", infinite: "@", initialSlide: "@", lazyLoad: "@", onBeforeChange: "&", onAfterChange: "&", onInit: "&", onReInit: "&", onSetPosition: "&", pauseOnHover: "@", pauseOnDotsHover: "@", responsive: "@", rtl: "@", slide: "@", slidesToShow: "@", slidesToScroll: "@", speed: "@", swipe: "@", swipeToSlide: "@", touchMove: "@", touchThreshold: "@", useCSS: "@", variableWidth: "@", vertical: "@", prevArrow: "@", nextArrow: "@" }, link: function(scope, element, attrs) { var destroySlick, initializeSlick, isInitialized; return destroySlick = function() { return $timeout(function() { var slider; return slider = $(element), slider.unslick(), slider.find(".slick-list").remove(), slider }) }, initializeSlick = function() { return $timeout(function() { var currentIndex, slider; return slider = $(element), null != scope.currentIndex && (currentIndex = scope.currentIndex), slider.slick({ accessibility: "false" !== scope.accessibility, adaptiveHeight: "true" === scope.adaptiveHeight, arrows: "false" !== scope.arrows, asNavFor: scope.asNavFor ? scope.asNavFor : void 0, appendArrows: $(scope.appendArrows ? scope.appendArrows : element), appendDots: $(scope.appendDots ? scope.appendDots : element), autoplay: "true" === scope.autoplay, autoplaySpeed: null != scope.autoplaySpeed ? parseInt(scope.autoplaySpeed, 10) : 3e3, centerMode: "true" === scope.centerMode, centerPadding: scope.centerPadding || "50px", cssEase: scope.cssEase || "ease", customPaging: attrs.customPaging ? scope.customPaging : void 0, dots: "true" === scope.dots, draggable: "false" !== scope.draggable, easing: scope.easing || "linear", fade: "true" === scope.fade, focusOnSelect: "true" === scope.focusOnSelect, infinite: "false" !== scope.infinite, initialSlide: scope.initialSlide || 0, lazyLoad: scope.lazyLoad || "ondemand", onBeforeChange: attrs.onBeforeChange ? scope.onBeforeChange : void 0, onAfterChange: function(sl, index) { return attrs.onAfterChange && scope.onAfterChange(), null != currentIndex ? scope.$apply(function() { return currentIndex = index, scope.currentIndex = index }) : void 0 }, onInit: function(sl) { return attrs.onInit && scope.onInit(), null != currentIndex ? sl.slideHandler(currentIndex) : void 0 }, onReInit: attrs.onReInit ? scope.onReInit : void 0, onSetPosition: attrs.onSetPosition ? scope.onSetPosition : void 0, pauseOnHover: "false" !== scope.pauseOnHover, responsive: scope.responsive || void 0, rtl: "true" === scope.rtl, slide: scope.slide || "div", slidesToShow: null != scope.slidesToShow ? parseInt(scope.slidesToShow, 10) : 1, slidesToScroll: null != scope.slidesToScroll ? parseInt(scope.slidesToScroll, 10) : 1, speed: null != scope.speed ? parseInt(scope.speed, 10) : 300, swipe: "false" !== scope.swipe, swipeToSlide: "true" === scope.swipeToSlide, touchMove: "false" !== scope.touchMove, touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5, useCSS: "false" !== scope.useCSS, variableWidth: "true" === scope.variableWidth, vertical: "true" === scope.vertical, prevArrow: scope.prevArrow ? $(scope.prevArrow) : void 0, nextArrow: scope.nextArrow ? $(scope.nextArrow) : void 0 }), scope.$watch("currentIndex", function(newVal) { return null != currentIndex && null != newVal && newVal !== currentIndex ? slider.slickGoTo(newVal) : void 0 }) }) }, scope.initOnload ? (isInitialized = !1, scope.$watch("data", function(newVal) { return null != newVal ? (isInitialized && destroySlick(), initializeSlick(), isInitialized = !0) : void 0 })) : initializeSlick() } } }), angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter", function($scope, $filter) {
        var init;
        return $scope.stores = [{ name: "Nijiya Market", price: "$$", sales: 292, rating: 4 }, { name: "Eat On Monday Truck", price: "$", sales: 119, rating: 4.3 }, { name: "Tea Era", price: "$", sales: 874, rating: 4 }, { name: "Rogers Deli", price: "$", sales: 347, rating: 4.2 }, { name: "MoBowl", price: "$$$", sales: 24, rating: 4.6 }, { name: "The Milk Pail Market", price: "$", sales: 543, rating: 4.5 }, { name: "Nob Hill Foods", price: "$$", sales: 874, rating: 4 }, { name: "Scratch", price: "$$$", sales: 643, rating: 3.6 }, { name: "Gochi Japanese Fusion Tapas", price: "$$$", sales: 56, rating: 4.1 }, { name: "Cost Plus World Market", price: "$$", sales: 79, rating: 4 }, { name: "Bumble Bee Health Foods", price: "$$", sales: 43, rating: 4.3 }, { name: "Costco", price: "$$", sales: 219, rating: 3.6 }, { name: "Red Rock Coffee Co", price: "$", sales: 765, rating: 4.1 }, { name: "99 Ranch Market", price: "$", sales: 181, rating: 3.4 }, { name: "Mi Pueblo Food Center", price: "$", sales: 78, rating: 4 }, { name: "Cucina Venti", price: "$$", sales: 163, rating: 3.3 }, { name: "Sufi Coffee Shop", price: "$", sales: 113, rating: 3.3 }, { name: "Dana Street Roasting", price: "$", sales: 316, rating: 4.1 }, { name: "Pearl Cafe", price: "$", sales: 173, rating: 3.4 }, { name: "Posh Bagel", price: "$", sales: 140, rating: 4 }, { name: "Artisan Wine Depot", price: "$$", sales: 26, rating: 4.1 }, { name: "Hong Kong Chinese Bakery", price: "$", sales: 182, rating: 3.4 }, { name: "Starbucks", price: "$$", sales: 97, rating: 3.7 }, { name: "Tapioca Express", price: "$", sales: 301, rating: 3 }, { name: "House of Bagels", price: "$", sales: 82, rating: 4.4 }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) { var end, start; return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end) }, $scope.onFilterChange = function() { return $scope.select(1), $scope.currentPage = 1, $scope.row = "" }, $scope.onNumPerPageChange = function() { return $scope.select(1), $scope.currentPage = 1 }, $scope.onOrderChange = function() { return $scope.select(1), $scope.currentPage = 1 }, $scope.search = function() {
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
        }, $scope.order = function(rowName) { return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0 }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() { return $scope.search(), $scope.select($scope.currentPage) })()
    }]), angular.module("app.task", []).factory("taskStorage", function() { var DEMO_TASKS, STORAGE_ID; return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Try Google glass", "completed": false}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman :)", "completed": false}, {"title": "Apply for monster university!", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Learn Swift", "completed": false}, {"title": "Shopping", "completed": false} ]', { get: function() { return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS) }, put: function(tasks) { return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks)) } } }).directive("taskFocus", ["$timeout", function($timeout) { return { link: function(scope, ele, attrs) { return scope.$watch(attrs.taskFocus, function(newVal) { return newVal ? $timeout(function() { return ele[0].focus() }, 0, !1) : void 0 }) } } }]).controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", function($scope, taskStorage, filterFilter, $rootScope) {
        var tasks;
        return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, { completed: !1 }).length, $scope.editedTask = null, $scope.statusFilter = { completed: !1 }, $scope.filter = function(filter) {
            switch (filter) {
                case "all":
                    return $scope.statusFilter = "";
                case "active":
                    return $scope.statusFilter = { completed: !1 };
                case "completed":
                    return $scope.statusFilter = { completed: !0 }
            }
        }, $scope.add = function() { var newTask; return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({ title: newTask, completed: !1 }), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), $scope.newTask = "", $scope.remainingCount++) : void 0 }, $scope.edit = function(task) { return $scope.editedTask = task }, $scope.doneEditing = function(task) { return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), taskStorage.put(tasks) }, $scope.remove = function(task) { var index; return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed") }, $scope.completed = function(task) { return $scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.remainingCount > 0 ? logger.log(1 === $scope.remainingCount ? "Almost there! Only " + $scope.remainingCount + " task left" : "Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)") : void 0 }, $scope.clearCompleted = function() { return $scope.tasks = tasks = tasks.filter(function(val) { return !val.completed }), taskStorage.put(tasks) }, $scope.markAll = function(completed) { return tasks.forEach(function(task) { return task.completed = completed }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? logger.logSuccess("Congrats! All done :)") : void 0 }, $scope.$watch("remainingCount == 0", function(val) { return $scope.allChecked = val }), $scope.$watch("remainingCount", function(newVal) { return $rootScope.$broadcast("taskRemaining:changed", newVal) })
    }]), angular.module("TodoApp", []).controller("TodoCtrl", ["$scope", function($scope) {
        $scope.todos = [{ text: "To-Do List ", done: !0 }, { text: "To-Do List 2", done: !0 }, { text: "To-Do List 3", done: !0 }, { text: "To-Do List 4", done: !0 }, { text: "To-Do List 5", done: !1 }, { text: "To-Do List 6", done: !1 }, { text: "To-Do List 7", done: !1 }], $scope.addTodo = function() { $scope.todos.push({ text: $scope.todoText, done: !1 }), $scope.todoText = "" }, $scope.remaining = function() { var count; return count = 0, angular.forEach($scope.todos, function(todo) { count += todo.done ? 0 : 1 }), count }, $scope.archive = function() {
            var oldTodos;
            oldTodos = $scope.todos, $scope.todos = [], angular.forEach(oldTodos, function(todo) { todo.done || $scope.todos.push(todo) })
        }
    }]), angular.module("app.ui.ctrls", []).controller("starrating", function($scope) { $scope.toggleClass = function($event, className) { className = className || "is-open", $($event.target).toggleClass(className) } }).controller("AlertDemoCtrl", ["$scope", function($scope) {
        return $scope.alerts = [{ type: "success", msg: "Well done! You successfully read this important alert message." }, { type: "info", msg: "Heads up! This alert needs your attention, but it is not super important." }, { type: "warning", msg: "Warning! Best check yo self, you're not looking too good." }, { type: "danger", msg: "Oh snap! Change a few things up and try submitting again." }], $scope.addAlert = function() {
            var num, type;
            switch (num = Math.ceil(4 * Math.random())) {
                case 0:
                    type = "info";
                    break;
                case 1:
                    type = "success";
                    break;
                case 2:
                    type = "info";
                    break;
                case 3:
                    type = "warning";
                    break;
                case 4:
                    type = "danger"
            }
            return $scope.alerts.push({ type: type, msg: "Another alert!" })
        }, $scope.closeAlert = function(index) { return $scope.alerts.splice(index, 1) }
    }]).controller("ProgressDemoCtrl", ["$scope", function($scope) {
        return $scope.max = 200, $scope.random = function() {
            var type, value;
            value = Math.floor(100 * Math.random() + 10), type = 25 > value ? "success" : 50 > value ? "info" : 75 > value ? "warning" : "danger", $scope.showWarning = "danger" === type || "warning" === type, $scope.dynamic = value, $scope.type = type
        }, $scope.random()
    }]).controller("AccordionDemoCtrl", ["$scope", function($scope) {
        return $scope.oneAtATime = !0, $scope.groups = [{ title: "Dynamic Group Header - 1", content: "Dynamic Group Body - 1" }, { title: "Dynamic Group Header - 2", content: "Dynamic Group Body - 2" }, { title: "Dynamic Group Header - 3", content: "Dynamic Group Body - 3" }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = { isFirstOpen: !0, isFirstDisabled: !1 }, $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1, $scope.items.push("Item " + newItemNo)
        }
    }]).controller("CollapseDemoCtrl", ["$scope", function($scope) { return $scope.isCollapsed = !1 }]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function($scope, $modal, $log) {
        return $scope.items = ["item1", "item2", "item3"], $scope.open = function() {
            var modalInstance;
            modalInstance = $modal.open({ templateUrl: "myModalContent.html", controller: "ModalInstanceCtrl", resolve: { items: function() { return $scope.items } } }), modalInstance.result.then(function(selectedItem) { $scope.selected = selectedItem }, function() { $log.info("Modal dismissed at: " + new Date) })
        }
    }]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", function($scope, $modalInstance, items) { return $scope.items = items, $scope.selected = { item: $scope.items[0] }, $scope.ok = function() { $modalInstance.close($scope.selected.item) }, $scope.cancel = function() { $modalInstance.dismiss("cancel") } }]).controller("PaginationDemoCtrl", ["$scope", function($scope) { return $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function(pageNo) { return $scope.currentPage = pageNo }, $scope.maxSize = 5, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1 }]).controller("TabsDemoCtrl", function($scope) { $scope.tabs = [{ title: "Dynamic Title 1", content: "Dynamic content 1" }, { title: "Dynamic Title 2", content: "Dynamic content 2", disabled: !0 }] }).controller("TreeDemoCtrl", ["$scope", function($scope) {
        return $scope.list = [{ id: 1, title: "Item 1", items: [] }, { id: 2, title: "Item 2", items: [{ id: 21, title: "Item 2.1", items: [{ id: 211, title: "Item 2.1.1", items: [] }, { id: 212, title: "Item 2.1.2", items: [] }] }, { id: 22, title: "Item 2.2", items: [{ id: 221, title: "Item 2.2.1", items: [] }, { id: 222, title: "Item 2.2.2", items: [] }] }] }, { id: 3, title: "Item 3", items: [] }, { id: 4, title: "Item 4", items: [{ id: 41, title: "Item 4.1", items: [] }] }], $scope.selectedItem = {}, $scope.options = {}, $scope.remove = function(scope) { scope.remove() }, $scope.toggle = function(scope) { scope.toggle() }, $scope.newSubItem = function(scope) {
            var nodeData;
            nodeData = scope.$modelValue, nodeData.items.push({ id: 10 * nodeData.id + nodeData.items.length, title: nodeData.title + "." + (nodeData.items.length + 1), items: [] })
        }
    }]).controller("MapDemoCtrl", ["$scope", "$http", "$interval", function($scope, $http, $interval) { var i, markers; for (markers = [], i = 0; 8 > i;) markers[i] = new google.maps.Marker({ title: "Marker: " + i }), i++; return $scope.GenerateMapMarkers = function() { var d, lat, lng, loc, numMarkers; for (d = new Date, $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) lat = 43.66 + Math.random() / 100, lng = -79.4103 + Math.random() / 100, loc = new google.maps.LatLng(lat, lng), markers[i].setPosition(loc), markers[i].setMap($scope.map), i++ }, $interval($scope.GenerateMapMarkers, 2e3) }]).controller("invoiceCtrl", ["$scope", "$window", function($scope) { return $scope.printInvoice = function() { var originalContents, popupWin, printContents; return originalContents = void 0, popupWin = void 0, printContents = void 0, printContents = document.getElementById("invoice").innerHTML, originalContents = document.body.innerHTML, popupWin = window.open(), popupWin.document.open(), popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /><link rel="stylesheet" type="text/css" href="styles/bootstrap.css" /></head><body onload="window.print()">' + printContents + "</html>"), popupWin.document.close() } }]), angular.module("app.ui.directives", []).directive("uiNotCloseOnClick", [function() { return { restrict: "A", compile: function(ele) { return ele.on("click", function(event) { return event.stopPropagation() }) } } }]).directive("slimScroll", [function() { return { restrict: "A", link: function(scope, ele, attrs) { return ele.slimScroll({ height: attrs.scrollHeight || "100%" }) } } }]), angular.module("app.ui.jvectormap", []).directive("uiJvectormap", [function() { return { restrict: "A", scope: { options: "=" }, link: function(scope, ele) { var options; return options = scope.options, ele.vectorMap(options) } } }]).controller("jvectormapCtrl", ["$scope", function($scope) { var usa_markers, world_marker_data; return world_marker_data = [{ latLng: [41.9, 12.45], name: "Vatican City" }, { latLng: [55.75, 37.61], name: "Moscow" }, { latLng: [52.52, 13.4], name: "Berlin" }, { latLng: [37.77, -122.41], name: "San Francisco" }, { latLng: [3.2, 73.22], name: "Maldives" }, { latLng: [32.71, -117.16], name: "San Diego" }, { latLng: [40.71, -74], name: "New York" }, { latLng: [47.6, -122.33], name: "Seattle" }, { latLng: [1.3, 103.8], name: "Singapore" }, { latLng: [41.87, -87.62], name: "Chicago" }, { latLng: [26.02, 50.55], name: "Bahrain" }], usa_markers = [{ latLng: [40.71, -74], name: "New York" }, { latLng: [47.6, -122.33], name: "Seattle" }, { latLng: [34.05, -118.24], name: "Los Angeles" }, { latLng: [37.77, -122.41], name: "San Francisco" }, { latLng: [41.87, -87.62], name: "Chicago" }, { latLng: [29.76, -95.36], name: "Houston" }, { latLng: [39.95, -75.16], name: "Philadelphia" }, { latLng: [38.9, -77.03], name: "Washington" }], $scope.Jvusamap = { map: "us_aea_en", zoomButtons: !1, markers: usa_markers, normalizeFunction: "polynomial", regionsSelectable: !0, markersSelectable: !0, backgroundColor: "#ffffff", zoomOnScroll: !0, selectedRegion: "MO", regionStyle: { initial: { fill: "#00d5e6" }, hover: { fill: "#57d016" } }, markerStyle: { initial: { fill: "#FAC552", stroke: "#FAC552", "fill-opacity": 1, "stroke-width": 8, "stroke-opacity": .3 } }, series: { markers: { attribute: "r", scale: [5, 15], values: [187.7, 255.16, 310.69, 605.17, 248.31, 107.35, 217.22] } } }, $scope.Jvworldmap = { map: "world_mill_en", zoomButtons: !0, markers: world_marker_data, normalizeFunction: "polynomial", regionsSelectable: !0, markersSelectable: !0, backgroundColor: "#ffffff", zoomOnScroll: !1, regionStyle: { initial: { fill: "#000000", "fill-opacity": 1, stroke: "none", "stroke-width": 0, "stroke-opacity": 1 }, hover: { fill: $scope.color.success } }, series: { regions: { scale: ["#C8EEFF", "#0071A4"], normalizeFunction: "polynomial" }, markers: { attribute: "r", scale: [5, 15], values: [187.7, 255.16, 310.69, 605.17, 248.31, 107.35, 217.22] } }, markerStyle: { initial: { fill: "#E9422E", stroke: "#E9422E", "fill-opacity": 1, "stroke-width": 8, "stroke-opacity": .3 }, hover: { stroke: "black", "stroke-width": 2 } } } }]), eval(function(p, a, c, k) { for (; c--;) k[c] && (p = p.replace(new RegExp("\\b" + c.toString(a) + "\\b", "g"), k[c])); return p }('$.1m({1w:b(e,t,n){b h(){3 e=o[0][0];3 t=o[o.8-1][0];3 n=(t-e)/a;3 r=[];r.6(o[0]);3 i=1;7=o[0];4=o[i];q(3 s=e+n;s<t+n;s+=n){9(s>t){s=t}$("#18").19(s);1a(s>4[0]){7=4;4=o[i++]}9(s==4[0]){r.6([s,4[1]]);7=4;4=o[i++]}11{3 u=(4[1]-7[1])/(4[0]-7[0]);16=u*s+(7[1]-u*7[0]);r.6([s,16])}}j r}b v(){3 n=[];p++;1b(c){14"1c":n=d.w(-1*p);y;14"1h":n=d.w(d.8/2-p/2,d.8/2+p/2);y;1d:n=d.w(0,p);y}9(!u){13=n[0][0];12=n[n.8-1][0];n=[];q(3 i=0;i<o.8;i++){9(o[i][0]>=13&&o[i][0]<=12){n.6(o[i])}}}t[r].x=p<a?n:o;g.1j(t);g.1i();9(p<a){15(v,f/a)}11{e.1g("1f")}}b m(i){3 s=[];s.6([i[0][0],k.1e.10(k,i.z(b(e){j e[1]}))]);s.6([i[0][0],17]);s.6([i[0][0],k.1k.10(k,i.z(b(e){j e[1]}))]);q(3 o=0;o<i.8;o++){s.6([i[o][0],17])}t[r].x=s;j $.1l(e,t,n)}3 r=0;q(3 i=0;i<t.8;i++){9(t[i].5){r=i}}3 s=t[r];3 o=s.x;3 u=t[r].1v?1x:1t;3 a=t[r].5&&t[r].5.1r||1q;3 f=t[r].5&&t[r].5.1p||1o;3 l=t[r].5&&t[r].5.1n||0;3 c=t[r].5&&t[r].5.1u||"1s";3 p=0;3 d=h();3 g=m(o);15(v,l);j g}})', 36, 70, "|||var|nPoint|animator|push|lPoint|length|if||function||||||||return|Math||||||for||||||slice|data|break|map|apply|else|laV|inV|case|setTimeout|curV|null|m2|html|while|switch|left|default|max|animatorComplete|trigger|center|draw|setData|min|plot|extend|start|1e3|duration|135|steps|right|false|direction|lines|plotAnimator|true".split("|"))),
    function($) {
        function init(plot) {
            function reOrderBars(plot, serie, datapoints) {
                var shiftedPoints = null;
                if (serieNeedToBeReordered(serie) && (checkIfGraphIsHorizontal(serie), calculPixel2XWidthConvert(plot), retrieveBarSeries(plot), calculBorderAndBarWidth(serie), nbOfBarsToOrder >= 2)) {
                    var position = findPosition(serie),
                        decallage = 0,
                        centerBarShift = calculCenterBarShift();
                    "undefined" == typeof decallageByOrder[serie.bars.order] && (decallageByOrder[serie.bars.order] = isBarAtLeftOfCenter(position) ? -1 * sumWidth(orderedBarSeries, position - 1, Math.floor(nbOfBarsToOrder / 2) - 1) - centerBarShift : sumWidth(orderedBarSeries, Math.ceil(nbOfBarsToOrder / 2), position - 2) + centerBarShift + 2 * borderWidthInXabsWidth), decallage = decallageByOrder[serie.bars.order], shiftedPoints = shiftPoints(datapoints, serie, decallage), datapoints.points = shiftedPoints
                }
                return shiftedPoints
            }

            function serieNeedToBeReordered(serie) { return null != serie.bars && serie.bars.show && null != serie.bars.order }

            function calculPixel2XWidthConvert(plot) {
                var gridDimSize = isHorizontal ? plot.getPlaceholder().innerHeight() : plot.getPlaceholder().innerWidth(),
                    minMaxValues = isHorizontal ? getAxeMinMaxValues(plot.getData(), 1) : getAxeMinMaxValues(plot.getData(), 0),
                    AxeSize = minMaxValues[1] - minMaxValues[0];
                pixelInXWidthEquivalent = AxeSize / gridDimSize
            }

            function getAxeMinMaxValues(series, AxeIdx) { for (var minMaxValues = new Array, i = 0; i < series.length; i++) minMaxValues[0] = series[i].data[0][AxeIdx], minMaxValues[1] = series[i].data[series[i].data.length - 1][AxeIdx]; return minMaxValues }

            function retrieveBarSeries(plot) { orderedBarSeries = findOthersBarsToReOrders(plot.getData()), nbOfBarsToOrder = orderedBarSeries.length }

            function findOthersBarsToReOrders(series) { for (var retSeries = new Array, orderValuesSeen = [], i = 0; i < series.length; i++) null != series[i].bars.order && series[i].bars.show && orderValuesSeen.indexOf(series[i].bars.order) < 0 && (orderValuesSeen.push(series[i].bars.order), retSeries.push(series[i])); return retSeries.sort(sortByOrder) }

            function sortByOrder(serie1, serie2) {
                var x = serie1.bars.order,
                    y = serie2.bars.order;
                return y > x ? -1 : x > y ? 1 : 0
            }

            function calculBorderAndBarWidth(serie) { borderWidth = "undefined" != typeof serie.bars.lineWidth ? serie.bars.lineWidth : 2, borderWidthInXabsWidth = borderWidth * pixelInXWidthEquivalent }

            function checkIfGraphIsHorizontal(serie) { serie.bars.horizontal && (isHorizontal = !0) }

            function findPosition(serie) {
                for (var pos = 0, i = 0; i < orderedBarSeries.length; ++i)
                    if (serie == orderedBarSeries[i]) { pos = i; break }
                return pos + 1
            }

            function calculCenterBarShift() { var width = 0; return nbOfBarsToOrder % 2 != 0 && (width = orderedBarSeries[Math.ceil(nbOfBarsToOrder / 2)].bars.barWidth / 2), width }

            function isBarAtLeftOfCenter(position) { return position <= Math.ceil(nbOfBarsToOrder / 2) }

            function sumWidth(series, start, end) { for (var totalWidth = 0, i = start; end >= i; i++) totalWidth += series[i].bars.barWidth + 2 * borderWidthInXabsWidth; return totalWidth }

            function shiftPoints(datapoints, serie, dx) { for (var ps = datapoints.pointsize, points = datapoints.points, j = 0, i = isHorizontal ? 1 : 0; i < points.length; i += ps) points[i] += dx, serie.data[j][3] = points[i], j++; return points }
            var orderedBarSeries, nbOfBarsToOrder, borderWidth, borderWidthInXabsWidth, pixelInXWidthEquivalent = 1,
                isHorizontal = !1,
                decallageByOrder = {};
            plot.hooks.processDatapoints.push(reOrderBars)
        }
        var options = { series: { bars: { order: null } } };
        $.plot.plugins.push({ init: init, options: options, name: "orderBars", version: "0.2" })
    }(jQuery),
    function(a, b, c) {
        ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.sparkline && a(jQuery) }(function(d) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, e = {},
                L = 0;
            f = function() { return { common: { type: "line", lineColor: "#00f", fillColor: "#cdf", defaultPixelsPerValue: 3, width: "auto", height: "auto", composite: !1, tagValuesAttribute: "values", tagOptionsPrefix: "spark", enableTagOptions: !1, enableHighlight: !0, highlightLighten: 1.4, tooltipSkipNull: !0, tooltipPrefix: "", tooltipSuffix: "", disableHiddenCheck: !1, numberFormatter: !1, numberDigitGroupCount: 3, numberDigitGroupSep: ",", numberDecimalMark: ".", disableTooltips: !1, disableInteraction: !1 }, line: { spotColor: "#f80", highlightSpotColor: "#5f5", highlightLineColor: "#f22", spotRadius: 1.5, minSpotColor: "#f80", maxSpotColor: "#f80", lineWidth: 1, normalRangeMin: c, normalRangeMax: c, normalRangeColor: "#ccc", drawNormalOnTop: !1, chartRangeMin: c, chartRangeMax: c, chartRangeMinX: c, chartRangeMaxX: c, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}') }, bar: { barColor: "#3366cc", negBarColor: "#f44", stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], zeroColor: c, nullColor: c, zeroAxis: !0, barWidth: 4, barSpacing: 1, chartRangeMax: c, chartRangeMin: c, chartRangeClip: !1, colorMap: c, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}') }, tristate: { barWidth: 4, barSpacing: 1, posBarColor: "#6f6", negBarColor: "#f44", zeroBarColor: "#999", colorMap: {}, tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'), tooltipValueLookups: { map: { "-1": "Loss", 0: "Draw", 1: "Win" } } }, discrete: { lineHeight: "auto", thresholdColor: c, thresholdValue: 0, chartRangeMax: c, chartRangeMin: c, chartRangeClip: !1, tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}") }, bullet: { targetColor: "#f33", targetWidth: 3, performanceColor: "#33f", rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"], base: c, tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"), tooltipValueLookups: { fields: { r: "Range", p: "Performance", t: "Target" } } }, pie: { offset: 0, sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"], borderWidth: 0, borderColor: "#000", tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)') }, box: { raw: !1, boxLineColor: "#000", boxFillColor: "#cdf", whiskerColor: "#000", outlierLineColor: "#333", outlierFillColor: "#fff", medianColor: "#f00", showOutliers: !0, outlierIQR: 1.5, spotRadius: 1.5, target: c, targetColor: "#4a2", chartRangeMax: c, chartRangeMin: c, tooltipFormat: new h("{{field:fields}}: {{value}}"), tooltipFormatFieldlistKey: "field", tooltipValueLookups: { fields: { lq: "Lower Quartile", med: "Median", uq: "Upper Quartile", lo: "Left Outlier", ro: "Right Outlier", lw: "Left Whisker", rw: "Right Whisker" } } } } }, E = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}', g = function() { var a, b; return a = function() { this.init.apply(this, arguments) }, arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0], arguments[arguments.length - 1]), a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1], arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1), b.unshift(a.prototype), d.extend.apply(d, b))) : a.prototype = arguments[0], a.prototype.cls = a, a }, d.SPFormatClass = h = g({
                fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
                precre: /(\w+)\.(\d+)/,
                init: function(a, b) { this.format = a, this.fclass = b },
                render: function(a, b, d) {
                    var g, h, i, j, k, e = this,
                        f = a;
                    return this.format.replace(this.fre, function() { var a; return h = arguments[1], i = arguments[3], g = e.precre.exec(h), g ? (k = g[2], h = g[1]) : k = !1, j = f[h], j === c ? "" : i && b && b[i] ? (a = b[i], a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (j = d.get("numberFormatter") ? d.get("numberFormatter")(j) : s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))), j) })
                }
            }), d.spformat = function(a, b) { return new h(a, b) }, i = function(a, b, c) { return b > a ? b : a > c ? c : a }, j = function(a, c) { var d; return 2 === c ? (d = b.floor(a.length / 2), a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4, d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) }, k = function(a) {
                var b;
                switch (a) {
                    case "undefined":
                        a = c;
                        break;
                    case "null":
                        a = null;
                        break;
                    case "true":
                        a = !0;
                        break;
                    case "false":
                        a = !1;
                        break;
                    default:
                        b = parseFloat(a), a == b && (a = b)
                }
                return a
            }, l = function(a) { var b, c = []; for (b = a.length; b--;) c[b] = k(a[b]); return c }, m = function(a, b) { var c, d, e = []; for (c = 0, d = a.length; d > c; c++) a[c] !== b && e.push(a[c]); return e }, n = function(a) { return !isNaN(parseFloat(a)) && isFinite(a) }, s = function(a, b, c, e, f) { var g, h; for (a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""), g = (g = d.inArray(".", a)) < 0 ? a.length : g, g < a.length && (a[g] = f), h = g - c; h > 0; h -= c) a.splice(h, 0, e); return a.join("") }, o = function(a, b, c) {
                var d;
                for (d = b.length; d--;)
                    if ((!c || null !== b[d]) && b[d] !== a) return !1;
                return !0
            }, p = function(a) { var c, b = 0; for (c = a.length; c--;) b += "number" == typeof a[c] ? a[c] : 0; return b }, r = function(a) { return d.isArray(a) ? a : [a] }, q = function(b) {
                var c;
                a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"), c.type = "text/css", a.getElementsByTagName("head")[0].appendChild(c), c["string" == typeof a.body.style.WebkitAppearance ? "innerText" : "innerHTML"] = b)
            }, d.fn.simpledraw = function(b, e, f, g) {
                var h, i;
                if (f && (h = this.data("_jqs_vcanvas"))) return h;
                if (d.fn.sparkline.canvas === !1) return !1;
                if (d.fn.sparkline.canvas === c) {
                    var j = a.createElement("canvas");
                    if (j.getContext && j.getContext("2d")) d.fn.sparkline.canvas = function(a, b, c, d) { return new I(a, b, c, d) };
                    else {
                        if (!a.namespaces || a.namespaces.v) return d.fn.sparkline.canvas = !1, !1;
                        a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"), d.fn.sparkline.canvas = function(a, b, c) { return new J(a, b, c) }
                    }
                }
                return b === c && (b = d(this).innerWidth()), e === c && (e = d(this).innerHeight()), h = d.fn.sparkline.canvas(b, e, this, g), i = d(this).data("_jqs_mhandler"), i && i.registerCanvas(h), h
            }, d.fn.cleardraw = function() {
                var a = this.data("_jqs_vcanvas");
                a && a.reset()
            }, d.RangeMapClass = t = g({
                init: function(a) {
                    var b, c, d = [];
                    for (b in a) a.hasOwnProperty(b) && "string" == typeof b && b.indexOf(":") > -1 && (c = b.split(":"), c[0] = 0 === c[0].length ? -1 / 0 : parseFloat(c[0]), c[1] = 0 === c[1].length ? 1 / 0 : parseFloat(c[1]), c[2] = a[b], d.push(c));
                    this.map = a, this.rangelist = d || !1
                },
                get: function(a) {
                    var d, e, f, b = this.rangelist;
                    if ((f = this.map[a]) !== c) return f;
                    if (b)
                        for (d = b.length; d--;)
                            if (e = b[d], e[0] <= a && e[1] >= a) return e[2];
                    return c
                }
            }), d.range_map = function(a) { return new t(a) }, u = g({
                init: function(a, b) {
                    var c = d(a);
                    this.$el = c, this.options = b, this.currentPageX = 0, this.currentPageY = 0, this.el = a, this.splist = [], this.tooltip = null, this.over = !1, this.displayTooltips = !b.get("disableTooltips"), this.highlightEnabled = !b.get("disableHighlight")
                },
                registerSparkline: function(a) { this.splist.push(a), this.over && this.updateDisplay() },
                registerCanvas: function(a) {
                    var b = d(a.canvas);
                    this.canvas = a, this.$canvas = b, b.mouseenter(d.proxy(this.mouseenter, this)), b.mouseleave(d.proxy(this.mouseleave, this)), b.click(d.proxy(this.mouseclick, this))
                },
                reset: function(a) { this.splist = [], this.tooltip && a && (this.tooltip.remove(), this.tooltip = c) },
                mouseclick: function(a) {
                    var b = d.Event("sparklineClick");
                    b.originalEvent = a, b.sparklines = this.splist, this.$el.trigger(b)
                },
                mouseenter: function(b) { d(a.body).unbind("mousemove.jqs"), d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)), this.over = !0, this.currentPageX = b.pageX, this.currentPageY = b.pageY, this.currentEl = b.target, !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options), this.tooltip.updatePosition(b.pageX, b.pageY)), this.updateDisplay() },
                mouseleave: function() {
                    d(a.body).unbind("mousemove.jqs");
                    var f, g, b = this.splist,
                        c = b.length,
                        e = !1;
                    for (this.over = !1, this.currentEl = null, this.tooltip && (this.tooltip.remove(), this.tooltip = null), g = 0; c > g; g++) f = b[g], f.clearRegionHighlight() && (e = !0);
                    e && this.canvas.render()
                },
                mousemove: function(a) { this.currentPageX = a.pageX, this.currentPageY = a.pageY, this.currentEl = a.target, this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY), this.updateDisplay() },
                updateDisplay: function() {
                    var h, i, j, k, l, a = this.splist,
                        b = a.length,
                        c = !1,
                        e = this.$canvas.offset(),
                        f = this.currentPageX - e.left,
                        g = this.currentPageY - e.top;
                    if (this.over) {
                        for (j = 0; b > j; j++) i = a[j], k = i.setRegionHighlight(this.currentEl, f, g), k && (c = !0);
                        if (c) {
                            if (l = d.Event("sparklineRegionChange"), l.sparklines = this.splist, this.$el.trigger(l), this.tooltip) {
                                for (h = "", j = 0; b > j; j++) i = a[j], h += i.getCurrentRegionTooltip();
                                this.tooltip.setContent(h)
                            }
                            this.disableHighlight || this.canvas.render()
                        }
                        null === k && this.mouseleave()
                    }
                }
            }), v = g({
                sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
                init: function(b) {
                    var f, c = b.get("tooltipClassname", "jqstooltip"),
                        e = this.sizeStyle;
                    this.container = b.get("tooltipContainer") || a.body, this.tooltipOffsetX = b.get("tooltipOffsetX", 10), this.tooltipOffsetY = b.get("tooltipOffsetY", 12), d("#jqssizetip").remove(), d("#jqstooltip").remove(), this.sizetip = d("<div/>", { id: "jqssizetip", style: e, "class": c }), this.tooltip = d("<div/>", { id: "jqstooltip", "class": c }).appendTo(this.container), f = this.tooltip.offset(), this.offsetLeft = f.left, this.offsetTop = f.top, this.hidden = !0, d(window).unbind("resize.jqs scroll.jqs"), d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)), this.updateWindowDims()
                },
                updateWindowDims: function() { this.scrollTop = d(window).scrollTop(), this.scrollLeft = d(window).scrollLeft(), this.scrollRight = this.scrollLeft + d(window).width(), this.updatePosition() },
                getSize: function(a) { this.sizetip.html(a).appendTo(this.container), this.width = this.sizetip.width() + 1, this.height = this.sizetip.height(), this.sizetip.remove() },
                setContent: function(a) { return a ? (this.getSize(a), this.tooltip.html(a).css({ width: this.width, height: this.height, visibility: "visible" }), this.hidden && (this.hidden = !1, this.updatePosition()), void 0) : (this.tooltip.css("visibility", "hidden"), void(this.hidden = !0)) },
                updatePosition: function(a, b) {
                    if (a === c) {
                        if (this.mousex === c) return;
                        a = this.mousex - this.offsetLeft, b = this.mousey - this.offsetTop
                    } else this.mousex = a -= this.offsetLeft, this.mousey = b -= this.offsetTop;
                    this.height && this.width && !this.hidden && (b -= this.height + this.tooltipOffsetY, a += this.tooltipOffsetX, b < this.scrollTop && (b = this.scrollTop), a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width), this.tooltip.css({ left: a, top: b }))
                },
                remove: function() { this.tooltip.remove(), this.sizetip.remove(), this.sizetip = this.tooltip = c, d(window).unbind("resize.jqs scroll.jqs") }
            }), F = function() { q(E) }, d(F), K = [], d.fn.sparkline = function(b, e) {
                return this.each(function() {
                    var h, i, f = new d.fn.sparkline.options(this, e),
                        g = d(this);
                    if (h = function() { var e, h, i, j, k, l, m; return "html" === b || b === c ? (m = this.getAttribute(f.get("tagValuesAttribute")), (m === c || null === m) && (m = g.html()), e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")) : e = b, h = "auto" === f.get("width") ? e.length * f.get("defaultPixelsPerValue") : f.get("width"), "auto" === f.get("height") ? f.get("composite") && d.data(this, "_jqs_vcanvas") || (j = a.createElement("span"), j.innerHTML = "a", g.html(j), i = d(j).innerHeight() || d(j).height(), d(j).remove(), j = null) : i = f.get("height"), f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"), k ? f.get("composite") || k.reset() : (k = new u(this, f), d.data(this, "_jqs_mhandler", k))), f.get("composite") && !d.data(this, "_jqs_vcanvas") ? void(d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"), d.data(this, "_jqs_errnotify", !0))) : (l = new(d.fn.sparkline[f.get("type")])(this, e, f, h, i), l.render(), k && k.registerSparkline(l), void 0) }, d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
                        if (!f.get("composite") && d.data(this, "_jqs_pending"))
                            for (i = K.length; i; i--) K[i - 1][0] == this && K.splice(i - 1, 1);
                        K.push([this, h]), d.data(this, "_jqs_pending", !0)
                    } else h.call(this)
                })
            }, d.fn.sparkline.defaults = f(), d.sparkline_display_visible = function() { var a, b, c, e = []; for (b = 0, c = K.length; c > b; b++) a = K[b][0], d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a), d.data(K[b][0], "_jqs_pending", !1), e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1), e.push(b)); for (b = e.length; b; b--) K.splice(e[b - 1], 1) }, d.fn.sparkline.options = g({
                init: function(a, b) {
                    var c, f, g, h;
                    this.userOptions = b = b || {}, this.tag = a, this.tagValCache = {}, f = d.fn.sparkline.defaults, g = f.common, this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix), h = this.getTagSetting("type"), c = h === e ? f[b.type || g.type] : f[h], this.mergedOptions = d.extend({}, g, c, b)
                },
                getTagSetting: function(a) {
                    var d, f, g, h, b = this.tagOptionsPrefix;
                    if (b === !1 || b === c) return e;
                    if (this.tagValCache.hasOwnProperty(a)) d = this.tagValCache.key;
                    else {
                        if (d = this.tag.getAttribute(b + a), d === c || null === d) d = e;
                        else if ("[" === d.substr(0, 1))
                            for (d = d.substr(1, d.length - 2).split(","), f = d.length; f--;) d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""));
                        else if ("{" === d.substr(0, 1))
                            for (g = d.substr(1, d.length - 2).split(","), d = {}, f = g.length; f--;) h = g[f].split(":", 2), d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""));
                        else d = k(d);
                        this.tagValCache.key = d
                    }
                    return d
                },
                get: function(a, b) { var f, d = this.getTagSetting(a); return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f }
            }), d.fn.sparkline._base = g({
                disabled: !1,
                init: function(a, b, e, f, g) { this.el = a, this.$el = d(a), this.values = b, this.options = e, this.width = f, this.height = g, this.currentRegion = c },
                initTarget: function() {
                    var a = !this.options.get("disableInteraction");
                    (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth, this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
                },
                render: function() { return this.disabled ? (this.el.innerHTML = "", !1) : !0 },
                getRegion: function() {},
                setRegionHighlight: function(a, b, d) {
                    var g, e = this.currentRegion,
                        f = !this.options.get("disableHighlight");
                    return b > this.canvasWidth || d > this.canvasHeight || 0 > b || 0 > d ? null : (g = this.getRegion(a, b, d), e !== g ? (e !== c && f && this.removeHighlight(), this.currentRegion = g, g !== c && f && this.renderHighlight(), !0) : !1)
                },
                clearRegionHighlight: function() { return this.currentRegion !== c ? (this.removeHighlight(), this.currentRegion = c, !0) : !1 },
                renderHighlight: function() { this.changeHighlight(!0) },
                removeHighlight: function() { this.changeHighlight(!1) },
                changeHighlight: function() {},
                getCurrentRegionTooltip: function() {
                    var f, g, i, j, k, l, m, n, o, p, q, r, s, t, a = this.options,
                        b = "",
                        e = [];
                    if (this.currentRegion === c) return "";
                    if (f = this.getCurrentRegionFields(), q = a.get("tooltipFormatter")) return q(this, a, f);
                    if (a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"), g = this.options.get("tooltipFormat"), !g) return "";
                    if (d.isArray(g) || (g = [g]), d.isArray(f) || (f = [f]), m = this.options.get("tooltipFormatFieldlist"), n = this.options.get("tooltipFormatFieldlistKey"), m && n) {
                        for (o = [], l = f.length; l--;) p = f[l][n], -1 != (t = d.inArray(p, m)) && (o[t] = f[l]);
                        f = o
                    }
                    for (i = g.length, s = f.length, l = 0; i > l; l++)
                        for (r = g[l], "string" == typeof r && (r = new h(r)), j = r.fclass || "jqsfield", t = 0; s > t; t++) f[t].isNull && a.get("tooltipSkipNull") || (d.extend(f[t], { prefix: a.get("tooltipPrefix"), suffix: a.get("tooltipSuffix") }), k = r.render(f[t], a.get("tooltipValueLookups"), a), e.push('<div class="' + j + '">' + k + "</div>"));
                    return e.length ? b + e.join("\n") : ""
                },
                getCurrentRegionFields: function() {},
                calcHighlightColor: function(a, c) {
                    var f, g, h, j, d = c.get("highlightColor"),
                        e = c.get("highlightLighten");
                    if (d) return d;
                    if (e && (f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))) { for (h = [], g = 4 === a.length ? 16 : 1, j = 0; 3 > j; j++) h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255); return "rgb(" + h.join(",") + ")" }
                    return a
                }
            }), w = {
                changeHighlight: function(a) {
                    var f, b = this.currentRegion,
                        c = this.target,
                        e = this.regionShapes[b];
                    e && (f = this.renderRegion(b, a), d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f), this.regionShapes[b] = d.map(f, function(a) { return a.id })) : (c.replaceWithShape(e, f), this.regionShapes[b] = f.id))
                },
                render: function() {
                    var e, f, g, h, a = this.values,
                        b = this.target,
                        c = this.regionShapes;
                    if (this.cls._super.render.call(this)) {
                        for (g = a.length; g--;)
                            if (e = this.renderRegion(g))
                                if (d.isArray(e)) {
                                    for (f = [], h = e.length; h--;) e[h].append(), f.push(e[h].id);
                                    c[g] = f
                                } else e.append(), c[g] = e.id;
                        else c[g] = null;
                        b.render()
                    }
                }
            }, d.fn.sparkline.line = x = g(d.fn.sparkline._base, {
                type: "line",
                init: function(a, b, c, d, e) { x._super.init.call(this, a, b, c, d, e), this.vertices = [], this.regionMap = [], this.xvalues = [], this.yvalues = [], this.yminmax = [], this.hightlightSpotId = null, this.lastShapeId = null, this.initTarget() },
                getRegion: function(a, b) {
                    var e, f = this.regionMap;
                    for (e = f.length; e--;)
                        if (null !== f[e] && b >= f[e][0] && b <= f[e][1]) return f[e][2];
                    return c
                },
                getCurrentRegionFields: function() { var a = this.currentRegion; return { isNull: null === this.yvalues[a], x: this.xvalues[a], y: this.yvalues[a], color: this.options.get("lineColor"), fillColor: this.options.get("fillColor"), offset: a } },
                renderHighlight: function() {
                    var i, j, a = this.currentRegion,
                        b = this.target,
                        d = this.vertices[a],
                        e = this.options,
                        f = e.get("spotRadius"),
                        g = e.get("highlightSpotColor"),
                        h = e.get("highlightLineColor");
                    d && (f && g && (i = b.drawCircle(d[0], d[1], f, c, g), this.highlightSpotId = i.id, b.insertAfterShape(this.lastShapeId, i)), h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h), this.highlightLineId = j.id, b.insertAfterShape(this.lastShapeId, j)))
                },
                removeHighlight: function() {
                    var a = this.target;
                    this.highlightSpotId && (a.removeShapeId(this.highlightSpotId), this.highlightSpotId = null), this.highlightLineId && (a.removeShapeId(this.highlightLineId), this.highlightLineId = null)
                },
                scanValues: function() {
                    var g, h, i, j, k, a = this.values,
                        c = a.length,
                        d = this.xvalues,
                        e = this.yvalues,
                        f = this.yminmax;
                    for (g = 0; c > g; g++) h = a[g], i = "string" == typeof a[g], j = "object" == typeof a[g] && a[g] instanceof Array, k = i && a[g].split(":"), i && 2 === k.length ? (d.push(Number(k[0])), e.push(Number(k[1])), f.push(Number(k[1]))) : j ? (d.push(h[0]), e.push(h[1]), f.push(h[1])) : (d.push(g), null === a[g] || "null" === a[g] ? e.push(null) : (e.push(Number(h)), f.push(Number(h))));
                    this.options.get("xvalues") && (d = this.options.get("xvalues")), this.maxy = this.maxyorg = b.max.apply(b, f), this.miny = this.minyorg = b.min.apply(b, f), this.maxx = b.max.apply(b, d), this.minx = b.min.apply(b, d), this.xvalues = d, this.yvalues = e, this.yminmax = f
                },
                processRangeOptions: function() {
                    var a = this.options,
                        b = a.get("normalRangeMin"),
                        d = a.get("normalRangeMax");
                    b !== c && (b < this.miny && (this.miny = b), d > this.maxy && (this.maxy = d)), a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")), a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")), a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")), a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"))
                },
                drawNormalRange: function(a, d, e, f, g) {
                    var h = this.options.get("normalRangeMin"),
                        i = this.options.get("normalRangeMax"),
                        j = d + b.round(e - e * ((i - this.miny) / g)),
                        k = b.round(e * (i - h) / g);
                    this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append()
                },
                render: function() {
                    var k, l, m, n, o, p, q, r, s, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K, a = this.options,
                        e = this.target,
                        f = this.canvasWidth,
                        g = this.canvasHeight,
                        h = this.vertices,
                        i = a.get("spotRadius"),
                        j = this.regionMap;
                    if (x._super.render.call(this) && (this.scanValues(), this.processRangeOptions(), I = this.xvalues, J = this.yvalues, this.yminmax.length && !(this.yvalues.length < 2))) {
                        for (n = o = 0, k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx, l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny, m = this.yvalues.length - 1, i && (4 * i > f || 4 * i > g) && (i = 0), i && (G = a.get("highlightSpotColor") && !a.get("disableInteraction"), (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny) && (g -= b.ceil(i)), (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy) && (g -= b.ceil(i), n += b.ceil(i)), (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy)) && (o += b.ceil(i), f -= b.ceil(i)), (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy)) && (f -= b.ceil(i))), g--, a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), q = [], r = [q], z = A = null, B = J.length, K = 0; B > K; K++) s = I[K], v = I[K + 1], u = J[K], w = o + b.round((s - this.minx) * (f / k)), y = B - 1 > K ? o + b.round((v - this.minx) * (f / k)) : f, A = w + (y - w) / 2, j[K] = [z || 0, A, K], z = A, null === u ? K && (null !== J[K - 1] && (q = [], r.push(q)), h.push(null)) : (u < this.miny && (u = this.miny), u > this.maxy && (u = this.maxy), q.length || q.push([w, n + g]), p = [w, n + b.round(g - g * ((u - this.miny) / l))], q.push(p), h.push(p));
                        for (C = [], D = [], E = r.length, K = 0; E > K; K++) q = r[K], q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]), D.push(q.slice(0)), q.pop()), q.length > 2 && (q[0] = [q[0][0], q[1][1]]), C.push(q));
                        for (E = D.length, K = 0; E > K; K++) e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
                        for (a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l), E = C.length, K = 0; E > K; K++) e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
                        if (i && a.get("valueSpots"))
                            for (F = a.get("valueSpots"), F.get === c && (F = new t(F)), K = 0; B > K; K++) H = F.get(J[K]), H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append();
                        i && a.get("spotColor") && null !== J[m] && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(), this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()), i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)], e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())), this.lastShapeId = e.getLastShapeId(), this.canvasTop = n, e.render()
                    }
                }
            }), d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, {
                type: "bar",
                init: function(a, e, f, g, h) {
                    var u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, j = parseInt(f.get("barWidth"), 10),
                        n = parseInt(f.get("barSpacing"), 10),
                        o = f.get("chartRangeMin"),
                        p = f.get("chartRangeMax"),
                        q = f.get("chartRangeClip"),
                        r = 1 / 0,
                        s = -1 / 0;
                    for (y._super.init.call(this, a, e, f, g, h), A = 0, B = e.length; B > A; A++) O = e[A], u = "string" == typeof O && O.indexOf(":") > -1, (u || d.isArray(O)) && (J = !0, u && (O = e[A] = l(O.split(":"))), O = m(O, null), v = b.min.apply(b, O), w = b.max.apply(b, O), r > v && (r = v), w > s && (s = w));
                    this.stacked = J, this.regionShapes = {}, this.barWidth = j, this.barSpacing = n, this.totalBarWidth = j + n, this.width = g = e.length * j + (e.length - 1) * n, this.initTarget(), q && (H = o === c ? -1 / 0 : o, I = p === c ? 1 / 0 : p), z = [], x = J ? [] : z;
                    var S = [],
                        T = [];
                    for (A = 0, B = e.length; B > A; A++)
                        if (J)
                            for (K = e[A], e[A] = N = [], S[A] = 0, x[A] = T[A] = 0, L = 0, M = K.length; M > L; L++) O = N[L] = q ? i(K[L], H, I) : K[L], null !== O && (O > 0 && (S[A] += O), 0 > r && s > 0 ? 0 > O ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (0 > O ? s : r)), z.push(O));
                        else O = q ? i(e[A], H, I) : e[A], O = e[A] = k(O), null !== O && z.push(O);
                    this.max = G = b.max.apply(b, z), this.min = F = b.min.apply(b, z), this.stackMax = s = J ? b.max.apply(b, S) : G, this.stackMin = r = J ? b.min.apply(b, z) : F, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")), this.zeroAxis = D = f.get("zeroAxis", !0), E = 0 >= F && G >= 0 && D ? 0 : 0 == D ? F : F > 0 ? F : G, this.xaxisOffset = E, C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F, this.canvasHeightEf = D && 0 > F ? this.canvasHeight - 2 : this.canvasHeight - 1, E > F ? (Q = J && G >= 0 ? s : G, P = (Q - E) / C * this.canvasHeight, P !== b.ceil(P) && (this.canvasHeightEf -= 2, P = b.ceil(P))) : P = this.canvasHeight, this.yoffset = P, d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = f.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.range = C
                },
                getRegion: function(a, d) { var f = b.floor(d / this.totalBarWidth); return 0 > f || f >= this.values.length ? c : f },
                getCurrentRegionFields: function() {
                    var d, e, a = this.currentRegion,
                        b = r(this.values[a]),
                        c = [];
                    for (e = b.length; e--;) d = b[e], c.push({ isNull: null === d, value: d, color: this.calcColor(e, d, a), offset: a });
                    return c
                },
                calcColor: function(a, b, e) {
                    var i, j, f = this.colorMapByIndex,
                        g = this.colorMapByValue,
                        h = this.options;
                    return i = h.get(this.stacked ? "stackedBarColor" : 0 > b ? "negBarColor" : "barColor"), 0 === b && h.get("zeroColor") !== c && (i = h.get("zeroColor")), g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]), d.isArray(i) ? i[a % i.length] : i
                },
                renderRegion: function(a, e) {
                    var q, r, s, t, u, v, w, x, y, z, f = this.values[a],
                        g = this.options,
                        h = this.xaxisOffset,
                        i = [],
                        j = this.range,
                        k = this.stacked,
                        l = this.target,
                        m = a * this.totalBarWidth,
                        n = this.canvasHeightEf,
                        p = this.yoffset;
                    if (f = d.isArray(f) ? f : [f], w = f.length, x = f[0], t = o(null, f), z = o(h, f, !0), t) return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g), q = p > 0 ? p - 1 : p, l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;
                    for (u = p, v = 0; w > v; v++) {
                        if (x = f[v], k && x === h) {
                            if (!z || y) continue;
                            y = !0
                        }
                        r = j > 0 ? b.floor(n * (b.abs(x - h) / j)) + 1 : 1, h > x || x === h && 0 === p ? (q = u, u += r) : (q = p - r, p -= r), s = this.calcColor(v, x, a), e && (s = this.calcHighlightColor(s, g)), i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s))
                    }
                    return 1 === i.length ? i[0] : i
                }
            }), d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, {
                type: "tristate",
                init: function(a, b, e, f, g) {
                    var h = parseInt(e.get("barWidth"), 10),
                        i = parseInt(e.get("barSpacing"), 10);
                    z._super.init.call(this, a, b, e, f, g), this.regionShapes = {}, this.barWidth = h, this.barSpacing = i, this.totalBarWidth = h + i, this.values = d.map(b, Number), this.width = f = b.length * h + (b.length - 1) * i, d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"), this.colorMapByValue = null) : (this.colorMapByIndex = null, this.colorMapByValue = e.get("colorMap"), this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))), this.initTarget()
                },
                getRegion: function(a, c) { return b.floor(c / this.totalBarWidth) },
                getCurrentRegionFields: function() { var a = this.currentRegion; return { isNull: this.values[a] === c, value: this.values[a], color: this.calcColor(this.values[a], a), offset: a } },
                calcColor: function(a, b) {
                    var g, h, c = this.values,
                        d = this.options,
                        e = this.colorMapByIndex,
                        f = this.colorMapByValue;
                    return g = f && (h = f.get(a)) ? h : e && e.length > b ? e[b] : d.get(c[b] < 0 ? "negBarColor" : c[b] > 0 ? "posBarColor" : "zeroBarColor")
                },
                renderRegion: function(a, c) {
                    var g, h, i, j, k, l, d = this.values,
                        e = this.options,
                        f = this.target;
                    return g = f.pixelHeight, i = b.round(g / 2), j = a * this.totalBarWidth, d[a] < 0 ? (k = i, h = i - 1) : d[a] > 0 ? (k = 0, h = i - 1) : (k = i - 1, h = 2), l = this.calcColor(d[a], a), null !== l ? (c && (l = this.calcHighlightColor(l, e)), f.drawRect(j, k, this.barWidth - 1, h - 1, l, l)) : void 0
                }
            }), d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, {
                type: "discrete",
                init: function(a, e, f, g, h) { A._super.init.call(this, a, e, f, g, h), this.regionShapes = {}, this.values = e = d.map(e, Number), this.min = b.min.apply(b, e), this.max = b.max.apply(b, e), this.range = this.max - this.min, this.width = g = "auto" === f.get("width") ? 2 * e.length : this.width, this.interval = b.floor(g / e.length), this.itemWidth = g / e.length, f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")), f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")), this.initTarget(), this.target && (this.lineHeight = "auto" === f.get("lineHeight") ? b.round(.3 * this.canvasHeight) : f.get("lineHeight")) },
                getRegion: function(a, c) { return b.floor(c / this.itemWidth) },
                getCurrentRegionFields: function() { var a = this.currentRegion; return { isNull: this.values[a] === c, value: this.values[a], offset: a } },
                renderRegion: function(a, c) {
                    var o, p, q, r, d = this.values,
                        e = this.options,
                        f = this.min,
                        g = this.max,
                        h = this.range,
                        j = this.interval,
                        k = this.target,
                        l = this.canvasHeight,
                        m = this.lineHeight,
                        n = l - m;
                    return p = i(d[a], f, g), r = a * j, o = b.round(n - n * ((p - f) / h)), q = e.get(e.get("thresholdColor") && p < e.get("thresholdValue") ? "thresholdColor" : "lineColor"), c && (q = this.calcHighlightColor(q, e)), k.drawLine(r, o, r, o + m, q)
                }
            }), d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, {
                type: "bullet",
                init: function(a, d, e, f, g) {
                    var h, i, j;
                    B._super.init.call(this, a, d, e, f, g), this.values = d = l(d), j = d.slice(), j[0] = null === j[0] ? j[2] : j[0], j[1] = null === d[1] ? j[2] : j[1], h = b.min.apply(b, d), i = b.max.apply(b, d), h = e.get("base") === c ? 0 > h ? h : 0 : e.get("base"), this.min = h, this.max = i, this.range = i - h, this.shapes = {}, this.valueShapes = {}, this.regiondata = {}, this.width = f = "auto" === e.get("width") ? "4.0em" : f, this.target = this.$el.simpledraw(f, g, e.get("composite")), d.length || (this.disabled = !0), this.initTarget()
                },
                getRegion: function(a, b, d) { var e = this.target.getShapeAt(a, b, d); return e !== c && this.shapes[e] !== c ? this.shapes[e] : c },
                getCurrentRegionFields: function() { var a = this.currentRegion; return { fieldkey: a.substr(0, 1), value: this.values[a.substr(1)], region: a } },
                changeHighlight: function(a) {
                    var d, b = this.currentRegion,
                        c = this.valueShapes[b];
                    switch (delete this.shapes[c], b.substr(0, 1)) {
                        case "r":
                            d = this.renderRange(b.substr(1), a);
                            break;
                        case "p":
                            d = this.renderPerformance(a);
                            break;
                        case "t":
                            d = this.renderTarget(a)
                    }
                    this.valueShapes[b] = d.id, this.shapes[d.id] = b, this.target.replaceWithShape(c, d)
                },
                renderRange: function(a, c) {
                    var d = this.values[a],
                        e = b.round(this.canvasWidth * ((d - this.min) / this.range)),
                        f = this.options.get("rangeColors")[a - 2];
                    return c && (f = this.calcHighlightColor(f, this.options)), this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f)
                },
                renderPerformance: function(a) {
                    var c = this.values[1],
                        d = b.round(this.canvasWidth * ((c - this.min) / this.range)),
                        e = this.options.get("performanceColor");
                    return a && (e = this.calcHighlightColor(e, this.options)), this.target.drawRect(0, b.round(.3 * this.canvasHeight), d - 1, b.round(.4 * this.canvasHeight) - 1, e, e)
                },
                renderTarget: function(a) {
                    var c = this.values[0],
                        d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2),
                        e = b.round(.1 * this.canvasHeight),
                        f = this.canvasHeight - 2 * e,
                        g = this.options.get("targetColor");
                    return a && (g = this.calcHighlightColor(g, this.options)), this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g)
                },
                render: function() {
                    var c, d, a = this.values.length,
                        b = this.target;
                    if (B._super.render.call(this)) {
                        for (c = 2; a > c; c++) d = this.renderRange(c).append(), this.shapes[d.id] = "r" + c, this.valueShapes["r" + c] = d.id;
                        null !== this.values[1] && (d = this.renderPerformance().append(), this.shapes[d.id] = "p1", this.valueShapes.p1 = d.id), null !== this.values[0] && (d = this.renderTarget().append(), this.shapes[d.id] = "t0", this.valueShapes.t0 = d.id), b.render()
                    }
                }
            }), d.fn.sparkline.pie = C = g(d.fn.sparkline._base, {
                type: "pie",
                init: function(a, c, e, f, g) {
                    var i, h = 0;
                    if (C._super.init.call(this, a, c, e, f, g), this.shapes = {}, this.valueShapes = {}, this.values = c = d.map(c, Number), "auto" === e.get("width") && (this.width = this.height), c.length > 0)
                        for (i = c.length; i--;) h += c[i];
                    this.total = h, this.initTarget(), this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2)
                },
                getRegion: function(a, b, d) { var e = this.target.getShapeAt(a, b, d); return e !== c && this.shapes[e] !== c ? this.shapes[e] : c },
                getCurrentRegionFields: function() { var a = this.currentRegion; return { isNull: this.values[a] === c, value: this.values[a], percent: this.values[a] / this.total * 100, color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length], offset: a } },
                changeHighlight: function(a) {
                    var b = this.currentRegion,
                        c = this.renderSlice(b, a),
                        d = this.valueShapes[b];
                    delete this.shapes[d], this.target.replaceWithShape(d, c), this.valueShapes[b] = c.id, this.shapes[c.id] = b
                },
                renderSlice: function(a, d) {
                    var n, o, p, q, r, e = this.target,
                        f = this.options,
                        g = this.radius,
                        h = f.get("borderWidth"),
                        i = f.get("offset"),
                        j = 2 * b.PI,
                        k = this.values,
                        l = this.total,
                        m = i ? 2 * b.PI * (i / 360) : 0;
                    for (q = k.length, p = 0; q > p; p++) {
                        if (n = m, o = m, l > 0 && (o = m + j * (k[p] / l)), a === p) return r = f.get("sliceColors")[p % f.get("sliceColors").length], d && (r = this.calcHighlightColor(r, f)), e.drawPieSlice(g, g, g - h, n, o, c, r);
                        m = o
                    }
                },
                render: function() {
                    var h, i, a = this.target,
                        d = this.values,
                        e = this.options,
                        f = this.radius,
                        g = e.get("borderWidth");
                    if (C._super.render.call(this)) {
                        for (g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append(), i = d.length; i--;) d[i] && (h = this.renderSlice(i).append(), this.valueShapes[i] = h.id, this.shapes[h.id] = i);
                        a.render()
                    }
                }
            }), d.fn.sparkline.box = D = g(d.fn.sparkline._base, {
                type: "box",
                init: function(a, b, c, e, f) { D._super.init.call(this, a, b, c, e, f), this.values = d.map(b, Number), this.width = "auto" === c.get("width") ? "4.0em" : e, this.initTarget(), this.values.length || (this.disabled = 1) },
                getRegion: function() { return 1 },
                getCurrentRegionFields: function() { var a = [{ field: "lq", value: this.quartiles[0] }, { field: "med", value: this.quartiles[1] }, { field: "uq", value: this.quartiles[2] }]; return this.loutlier !== c && a.push({ field: "lo", value: this.loutlier }), this.routlier !== c && a.push({ field: "ro", value: this.routlier }), this.lwhisker !== c && a.push({ field: "lw", value: this.lwhisker }), this.rwhisker !== c && a.push({ field: "rw", value: this.rwhisker }), a },
                render: function() {
                    var m, n, o, p, q, r, s, t, u, v, w, a = this.target,
                        d = this.values,
                        e = d.length,
                        f = this.options,
                        g = this.canvasWidth,
                        h = this.canvasHeight,
                        i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"),
                        k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"),
                        l = 0;
                    if (D._super.render.call(this)) {
                        if (f.get("raw")) f.get("showOutliers") && d.length > 5 ? (n = d[0], m = d[1], p = d[2], q = d[3], r = d[4], s = d[5], t = d[6]) : (m = d[0], p = d[1], q = d[2], r = d[3], s = d[4]);
                        else if (d.sort(function(a, b) { return a - b }), p = j(d, 1), q = j(d, 2), r = j(d, 3), o = r - p, f.get("showOutliers")) {
                            for (m = s = c, u = 0; e > u; u++) m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]), d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
                            n = d[0], t = d[e - 1]
                        } else m = d[0], s = d[e - 1];
                        this.quartiles = [p, q, r], this.lwhisker = m, this.rwhisker = s, this.loutlier = n, this.routlier = t, w = g / (k - i + 1), f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")), g -= 2 * b.ceil(f.get("spotRadius")), w = g / (k - i + 1), m > n && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(), t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()), a.drawRect(b.round((p - i) * w + l), b.round(.1 * h), b.round((r - p) * w), b.round(.8 * h), f.get("boxLineColor"), f.get("boxFillColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(), a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(), a.drawLine(b.round((q - i) * w + l), b.round(.1 * h), b.round((q - i) * w + l), b.round(.9 * h), f.get("medianColor")).append(), f.get("target") && (v = b.ceil(f.get("spotRadius")), a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(), a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()), a.render()
                    }
                }
            }), G = g({ init: function(a, b, c, d) { this.target = a, this.id = b, this.type = c, this.args = d }, append: function() { return this.target.appendShape(this), this } }), H = g({
                _pxregex: /(\d+)(px)?\s*$/i,
                init: function(a, b, c) { a && (this.width = a, this.height = b, this.target = c, this.lastShapeId = null, c[0] && (c = c[0]), d.data(c, "_jqs_vcanvas", this)) },
                drawLine: function(a, b, c, d, e, f) {
                    return this.drawShape([
                        [a, b],
                        [c, d]
                    ], e, f)
                },
                drawShape: function(a, b, c, d) { return this._genShape("Shape", [a, b, c, d]) },
                drawCircle: function(a, b, c, d, e, f) { return this._genShape("Circle", [a, b, c, d, e, f]) },
                drawPieSlice: function(a, b, c, d, e, f, g) { return this._genShape("PieSlice", [a, b, c, d, e, f, g]) },
                drawRect: function(a, b, c, d, e, f) { return this._genShape("Rect", [a, b, c, d, e, f]) },
                getElement: function() { return this.canvas },
                getLastShapeId: function() { return this.lastShapeId },
                reset: function() { alert("reset not implemented") },
                _insert: function(a, b) { d(b).html(a) },
                _calculatePixelDims: function(a, b, c) {
                    var e;
                    e = this._pxregex.exec(b), this.pixelHeight = e ? e[1] : d(c).height(), e = this._pxregex.exec(a), this.pixelWidth = e ? e[1] : d(c).width()
                },
                _genShape: function(a, b) { var c = L++; return b.unshift(c), new G(this, c, a, b) },
                appendShape: function() { alert("appendShape not implemented") },
                replaceWithShape: function() { alert("replaceWithShape not implemented") },
                insertAfterShape: function() { alert("insertAfterShape not implemented") },
                removeShapeId: function() { alert("removeShapeId not implemented") },
                getShapeAt: function() { alert("getShapeAt not implemented") },
                render: function() { alert("render not implemented") }
            }), I = g(H, {
                init: function(b, e, f, g) { I._super.init.call(this, b, e, f), this.canvas = a.createElement("canvas"), f[0] && (f = f[0]), d.data(f, "_jqs_vcanvas", this), d(this.canvas).css({ display: "inline-block", width: b, height: e, verticalAlign: "top" }), this._insert(this.canvas, f), this._calculatePixelDims(b, e, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, this.interact = g, this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c, d(this.canvas).css({ width: this.pixelWidth, height: this.pixelHeight }) },
                _getContext: function(a, b, d) { var e = this.canvas.getContext("2d"); return a !== c && (e.strokeStyle = a), e.lineWidth = d === c ? 1 : d, b !== c && (e.fillStyle = b), e },
                reset: function() {
                    var a = this._getContext();
                    a.clearRect(0, 0, this.pixelWidth, this.pixelHeight), this.shapes = {}, this.shapeseq = [], this.currentTargetShapeId = c
                },
                _drawShape: function(a, b, d, e, f) {
                    var h, i, g = this._getContext(d, e, f);
                    for (g.beginPath(), g.moveTo(b[0][0] + .5, b[0][1] + .5), h = 1, i = b.length; i > h; h++) g.lineTo(b[h][0] + .5, b[h][1] + .5);
                    d !== c && g.stroke(), e !== c && g.fill(), this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
                },
                _drawCircle: function(a, d, e, f, g, h, i) {
                    var j = this._getContext(g, h, i);
                    j.beginPath(), j.arc(d, e, f, 0, 2 * b.PI, !1), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a), g !== c && j.stroke(), h !== c && j.fill()
                },
                _drawPieSlice: function(a, b, d, e, f, g, h, i) {
                    var j = this._getContext(h, i);
                    j.beginPath(), j.moveTo(b, d), j.arc(b, d, e, f, g, !1), j.lineTo(b, d), j.closePath(), h !== c && j.stroke(), i && j.fill(), this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
                },
                _drawRect: function(a, b, c, d, e, f, g) {
                    return this._drawShape(a, [
                        [b, c],
                        [b + d, c],
                        [b + d, c + e],
                        [b, c + e],
                        [b, c]
                    ], f, g)
                },
                appendShape: function(a) { return this.shapes[a.id] = a, this.shapeseq.push(a.id), this.lastShapeId = a.id, a.id },
                replaceWithShape: function(a, b) {
                    var d, c = this.shapeseq;
                    for (this.shapes[b.id] = b, d = c.length; d--;) c[d] == a && (c[d] = b.id);
                    delete this.shapes[a]
                },
                replaceWithShapes: function(a, b) {
                    var e, f, g, c = this.shapeseq,
                        d = {};
                    for (f = a.length; f--;) d[a[f]] = !0;
                    for (f = c.length; f--;) e = c[f], d[e] && (c.splice(f, 1), delete this.shapes[e], g = f);
                    for (f = b.length; f--;) c.splice(g, 0, b[f].id), this.shapes[b[f].id] = b[f]
                },
                insertAfterShape: function(a, b) {
                    var d, c = this.shapeseq;
                    for (d = c.length; d--;)
                        if (c[d] === a) return c.splice(d + 1, 0, b.id), void(this.shapes[b.id] = b)
                },
                removeShapeId: function(a) {
                    var c, b = this.shapeseq;
                    for (c = b.length; c--;)
                        if (b[c] === a) { b.splice(c, 1); break }
                    delete this.shapes[a]
                },
                getShapeAt: function(a, b, c) { return this.targetX = b, this.targetY = c, this.render(), this.currentTargetShapeId },
                render: function() {
                    var e, f, g, a = this.shapeseq,
                        b = this.shapes,
                        c = a.length,
                        d = this._getContext();
                    for (d.clearRect(0, 0, this.pixelWidth, this.pixelHeight), g = 0; c > g; g++) e = a[g], f = b[e], this["_draw" + f.type].apply(this, f.args);
                    this.interact || (this.shapes = {}, this.shapeseq = [])
                }
            }), J = g(H, {
                init: function(b, c, e) {
                    var f;
                    J._super.init.call(this, b, c, e), e[0] && (e = e[0]), d.data(e, "_jqs_vcanvas", this), this.canvas = a.createElement("span"), d(this.canvas).css({ display: "inline-block", position: "relative", overflow: "hidden", width: b, height: c, margin: "0px", padding: "0px", verticalAlign: "top" }), this._insert(this.canvas, e), this._calculatePixelDims(b, c, this.canvas), this.canvas.width = this.pixelWidth, this.canvas.height = this.pixelHeight, f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>', this.canvas.insertAdjacentHTML("beforeEnd", f), this.group = d(this.canvas).children()[0], this.rendered = !1, this.prerender = ""
                },
                _drawShape: function(a, b, d, e, f) { var h, i, j, k, l, m, n, g = []; for (n = 0, m = b.length; m > n; n++) g[n] = "" + b[n][0] + "," + b[n][1]; return h = g.splice(0, 1), f = f === c ? 1 : f, i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ', j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ', k = g[0] === g[g.length - 1] ? "x " : "", l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + h + " l " + g.join(", ") + " " + k + 'e"> </v:shape>' },
                _drawCircle: function(a, b, d, e, f, g, h) { var i, j, k; return b -= e, d -= e, i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ', j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ', k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + 2 * e + "px; height:" + 2 * e + 'px"></v:oval>' },
                _drawPieSlice: function(a, d, e, f, g, h, i, j) {
                    var k, l, m, n, o, p, q, r;
                    if (g === h) return "";
                    if (h - g === 2 * b.PI && (g = 0, h = 2 * b.PI), l = d + b.round(b.cos(g) * f), m = e + b.round(b.sin(g) * f), n = d + b.round(b.cos(h) * f), o = e + b.round(b.sin(h) * f), l === n && m === o) {
                        if (h - g < b.PI) return "";
                        l = n = d + f, m = o = e
                    }
                    return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o], p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ', q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ', r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"  id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;"  path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e"> </v:shape>')
                },
                _drawRect: function(a, b, c, d, e, f, g) {
                    return this._drawShape(a, [
                        [b, c],
                        [b, c + e],
                        [b + d, c + e],
                        [b + d, c],
                        [b, c]
                    ], f, g)
                },
                reset: function() { this.group.innerHTML = "" },
                appendShape: function(a) { var b = this["_draw" + a.type].apply(this, a.args); return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b, this.lastShapeId = a.id, a.id },
                replaceWithShape: function(a, b) {
                    var c = d("#jqsshape" + a),
                        e = this["_draw" + b.type].apply(this, b.args);
                    c[0].outerHTML = e
                },
                replaceWithShapes: function(a, b) {
                    var g, c = d("#jqsshape" + a[0]),
                        e = "",
                        f = b.length;
                    for (g = 0; f > g; g++) e += this["_draw" + b[g].type].apply(this, b[g].args);
                    for (c[0].outerHTML = e, g = 1; g < a.length; g++) d("#jqsshape" + a[g]).remove()
                },
                insertAfterShape: function(a, b) {
                    var c = d("#jqsshape" + a),
                        e = this["_draw" + b.type].apply(this, b.args);
                    c[0].insertAdjacentHTML("afterEnd", e)
                },
                removeShapeId: function(a) {
                    var b = d("#jqsshape" + a);
                    this.group.removeChild(b[0])
                },
                getShapeAt: function(a) { var d = a.id.substr(8); return d },
                render: function() { this.rendered || (this.group.innerHTML = this.prerender, this.rendered = !0) }
            })
        })
    }(document, Math),
    function(global) {
        function circle(ctx, x, y, r) { ctx.beginPath(), ctx.arc(x, y, r, 0, TAU, !1), ctx.fill() }

        function line(ctx, ax, ay, bx, by) { ctx.beginPath(), ctx.moveTo(ax, ay), ctx.lineTo(bx, by), ctx.stroke() }

        function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
            var c = Math.cos(t * TAU),
                s = Math.sin(t * TAU);
            rmax -= rmin, circle(ctx, cx - s * rx, cy + c * ry + .5 * rmax, rmin + (1 - .5 * c) * rmax)
        }

        function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) { var i; for (i = 5; i--;) puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax) }

        function cloud(ctx, t, cx, cy, cw, s, color) {
            t /= 3e4;
            var a = .21 * cw,
                b = .12 * cw,
                c = .24 * cw,
                d = .28 * cw;
            ctx.fillStyle = color, puffs(ctx, t, cx, cy, a, b, c, d), ctx.globalCompositeOperation = "destination-out", puffs(ctx, t, cx, cy, a, b, c - s, d - s), ctx.globalCompositeOperation = "source-over"
        }

        function sun(ctx, t, cx, cy, cw, s, color) {
            t /= 12e4;
            var i, p, cos, sin, a = .25 * cw - .5 * s,
                b = .32 * cw + .5 * s,
                c = .5 * cw - .5 * s;
            for (ctx.strokeStyle = color, ctx.lineWidth = s, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.beginPath(), ctx.arc(cx, cy, a, 0, TAU, !1), ctx.stroke(), i = 8; i--;) p = (t + i / 8) * TAU, cos = Math.cos(p), sin = Math.sin(p), line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c)
        }

        function moon(ctx, t, cx, cy, cw, s, color) {
            t /= 15e3;
            var a = .29 * cw - .5 * s,
                b = .05 * cw,
                c = Math.cos(t * TAU),
                p = c * TAU / -16;
            ctx.strokeStyle = color, ctx.lineWidth = s, ctx.lineCap = "round", ctx.lineJoin = "round", cx += c * b, ctx.beginPath(), ctx.arc(cx, cy, a, p + TAU / 8, p + 7 * TAU / 8, !1), ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + 5 * TAU / 8, p + 3 * TAU / 8, !0), ctx.closePath(), ctx.stroke()
        }

        function rain(ctx, t, cx, cy, cw, s, color) {
            t /= 1350;
            var i, p, x, y, a = .16 * cw,
                b = 11 * TAU / 12,
                c = 7 * TAU / 12;
            for (ctx.fillStyle = color, i = 4; i--;) p = (t + i / 4) % 1, x = cx + (i - 1.5) / 1.5 * (1 === i || 2 === i ? -1 : 1) * a, y = cy + p * p * cw, ctx.beginPath(), ctx.moveTo(x, y - 1.5 * s), ctx.arc(x, y, .75 * s, b, c, !1), ctx.fill()
        }

        function sleet(ctx, t, cx, cy, cw, s, color) { t /= 750; var i, p, x, y, a = .1875 * cw; for (ctx.strokeStyle = color, ctx.lineWidth = .5 * s, ctx.lineCap = "round", ctx.lineJoin = "round", i = 4; i--;) p = (t + i / 4) % 1, x = Math.floor(cx + (i - 1.5) / 1.5 * (1 === i || 2 === i ? -1 : 1) * a) + .5, y = cy + p * cw, line(ctx, x, y - 1.5 * s, x, y + 1.5 * s) }

        function snow(ctx, t, cx, cy, cw, s, color) {
            t /= 3e3;
            var i, p, x, y, a = .16 * cw,
                b = .75 * s,
                u = t * TAU * .7,
                ux = Math.cos(u) * b,
                uy = Math.sin(u) * b,
                v = u + TAU / 3,
                vx = Math.cos(v) * b,
                vy = Math.sin(v) * b,
                w = u + 2 * TAU / 3,
                wx = Math.cos(w) * b,
                wy = Math.sin(w) * b;
            for (ctx.strokeStyle = color, ctx.lineWidth = .5 * s, ctx.lineCap = "round", ctx.lineJoin = "round", i = 4; i--;) p = (t + i / 4) % 1, x = cx + Math.sin((p + i / 4) * TAU) * a, y = cy + p * cw, line(ctx, x - ux, y - uy, x + ux, y + uy), line(ctx, x - vx, y - vy, x + vx, y + vy), line(ctx, x - wx, y - wy, x + wx, y + wy)
        }

        function fogbank(ctx, t, cx, cy, cw, s, color) {
            t /= 3e4;
            var a = .21 * cw,
                b = .06 * cw,
                c = .21 * cw,
                d = .28 * cw;
            ctx.fillStyle = color, puffs(ctx, t, cx, cy, a, b, c, d), ctx.globalCompositeOperation = "destination-out", puffs(ctx, t, cx, cy, a, b, c - s, d - s), ctx.globalCompositeOperation = "source-over"
        }

        function leaf(ctx, t, x, y, cw, s, color) {
            var a = cw / 8,
                b = a / 3,
                c = 2 * b,
                d = t % 1 * TAU,
                e = Math.cos(d),
                f = Math.sin(d);
            ctx.fillStyle = color, ctx.strokeStyle = color, ctx.lineWidth = s, ctx.lineCap = "round", ctx.lineJoin = "round", ctx.beginPath(), ctx.arc(x, y, a, d, d + Math.PI, !1), ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, !1), ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, !0), ctx.globalCompositeOperation = "destination-out", ctx.fill(), ctx.globalCompositeOperation = "source-over", ctx.stroke()
        }

        function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
            t /= 2500;
            var b, d, f, i, path = WIND_PATHS[index],
                a = (t + index - WIND_OFFSETS[index].start) % total,
                c = (t + index - WIND_OFFSETS[index].end) % total,
                e = (t + index) % total;
            if (ctx.strokeStyle = color, ctx.lineWidth = s, ctx.lineCap = "round", ctx.lineJoin = "round", 1 > a) {
                if (ctx.beginPath(), a *= path.length / 2 - 1, b = Math.floor(a), a -= b, b *= 2, b += 2, ctx.moveTo(cx + (path[b - 2] * (1 - a) + path[b] * a) * cw, cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw), 1 > c) {
                    for (c *= path.length / 2 - 1, d = Math.floor(c), c -= d, d *= 2, d += 2, i = b; i !== d; i += 2) ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
                    ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw)
                } else
                    for (i = b; i !== path.length; i += 2) ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
                ctx.stroke()
            } else if (1 > c) {
                for (ctx.beginPath(), c *= path.length / 2 - 1, d = Math.floor(c), c -= d, d *= 2, d += 2, ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw), i = 2; i !== d; i += 2) ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
                ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw), ctx.stroke()
            }
            1 > e && (e *= path.length / 2 - 1, f = Math.floor(e), e -= f, f *= 2, f += 2, leaf(ctx, t, cx + (path[f - 2] * (1 - e) + path[f] * e) * cw, cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw, cw, s, color))
        }
        var requestInterval, cancelInterval;
        ! function() {
            var raf = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame,
                caf = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || global.oCancelAnimationFrame || global.msCancelAnimationFrame;
            raf && caf ? (requestInterval = function(fn) {
                function loop() { handle.value = raf(loop), fn() }
                var handle = { value: null };
                return loop(), handle
            }, cancelInterval = function(handle) {
                caf(handle.value)
            }) : (requestInterval = setInterval, cancelInterval = clearInterval)
        }();
        var KEYFRAME = 500,
            STROKE = .08,
            TAU = 2 * Math.PI,
            TWO_OVER_SQRT_2 = 2 / Math.sqrt(2),
            WIND_PATHS = [
                [-.75, -.18, -.7219, -.1527, -.6971, -.1225, -.6739, -.091, -.6516, -.0588, -.6298, -.0262, -.6083, .0065, -.5868, .0396, -.5643, .0731, -.5372, .1041, -.5033, .1259, -.4662, .1406, -.4275, .1493, -.3881, .153, -.3487, .1526, -.3095, .1488, -.2708, .1421, -.2319, .1342, -.1943, .1217, -.16, .1025, -.129, .0785, -.1012, .0509, -.0764, .0206, -.0547, -.012, -.0378, -.0472, -.0324, -.0857, -.0389, -.1241, -.0546, -.1599, -.0814, -.1876, -.1193, -.1964, -.1582, -.1935, -.1931, -.1769, -.2157, -.1453, -.229, -.1085, -.2327, -.0697, -.224, -.0317, -.2064, .0033, -.1853, .0362, -.1613, .0672, -.135, .0961, -.1051, .1213, -.0706, .1397, -.0332, .1512, .0053, .158, .0442, .1624, .0833, .1636, .1224, .1615, .1613, .1565, .1999, .15, .2378, .1402, .2749, .1279, .3118, .1147, .3487, .1015, .3858, .0892, .4236, .0787, .4621, .0715, .5012, .0702, .5398, .0766, .5768, .089, .6123, .1055, .6466, .1244, .6805, .144, .7147, .163, .75, .18],
                [-.75, 0, -.7033, .0195, -.6569, .0399, -.6104, .06, -.5634, .0789, -.5155, .0954, -.4667, .1089, -.4174, .1206, -.3676, .1299, -.3174, .1365, -.2669, .1398, -.2162, .1391, -.1658, .1347, -.1157, .1271, -.0661, .1169, -.017, .1046, .0316, .0903, .0791, .0728, .1259, .0534, .1723, .0331, .2188, .0129, .2656, -.0064, .3122, -.0263, .3586, -.0466, .4052, -.0665, .4525, -.0847, .5007, -.1002, .5497, -.113, .5991, -.124, .6491, -.1325, .6994, -.138, .75, -.14]
            ],
            WIND_OFFSETS = [{ start: .36, end: .11 }, { start: .56, end: .16 }],
            Skycons = function(opts) { this.list = [], this.interval = null, this.color = opts && opts.color ? opts.color : "black", this.resizeClear = !(!opts || !opts.resizeClear) };
        Skycons.CLEAR_DAY = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            sun(ctx, t, .5 * w, .5 * h, s, s * STROKE, color)
        }, Skycons.CLEAR_NIGHT = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            moon(ctx, t, .5 * w, .5 * h, s, s * STROKE, color)
        }, Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            sun(ctx, t, .625 * w, .375 * h, .75 * s, s * STROKE, color), cloud(ctx, t, .375 * w, .625 * h, .75 * s, s * STROKE, color)
        }, Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            moon(ctx, t, .667 * w, .375 * h, .75 * s, s * STROKE, color), cloud(ctx, t, .375 * w, .625 * h, .75 * s, s * STROKE, color)
        }, Skycons.CLOUDY = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            cloud(ctx, t, .5 * w, .5 * h, s, s * STROKE, color)
        }, Skycons.RAIN = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            rain(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color), cloud(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color)
        }, Skycons.SLEET = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            sleet(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color), cloud(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color)
        }, Skycons.SNOW = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            snow(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color), cloud(ctx, t, .5 * w, .37 * h, .9 * s, s * STROKE, color)
        }, Skycons.WIND = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h);
            swoosh(ctx, t, .5 * w, .5 * h, s, s * STROKE, 0, 2, color), swoosh(ctx, t, .5 * w, .5 * h, s, s * STROKE, 1, 2, color)
        }, Skycons.FOG = function(ctx, t, color) {
            var w = ctx.canvas.width,
                h = ctx.canvas.height,
                s = Math.min(w, h),
                k = s * STROKE;
            fogbank(ctx, t, .5 * w, .32 * h, .75 * s, k, color), t /= 5e3;
            var a = Math.cos(t * TAU) * s * .02,
                b = Math.cos((t + .25) * TAU) * s * .02,
                c = Math.cos((t + .5) * TAU) * s * .02,
                d = Math.cos((t + .75) * TAU) * s * .02,
                n = .936 * h,
                e = Math.floor(n - .5 * k) + .5,
                f = Math.floor(n - 2.5 * k) + .5;
            ctx.strokeStyle = color, ctx.lineWidth = k, ctx.lineCap = "round", ctx.lineJoin = "round", line(ctx, a + .2 * w + .5 * k, e, b + .8 * w - .5 * k, e), line(ctx, c + .2 * w + .5 * k, f, d + .8 * w - .5 * k, f)
        }, Skycons.prototype = {
            add: function(el, draw) { var obj; "string" == typeof el && (el = document.getElementById(el)), null !== el && ("string" == typeof draw && (draw = draw.toUpperCase().replace(/-/g, "_"), draw = Skycons.hasOwnProperty(draw) ? Skycons[draw] : null), "function" == typeof draw && (obj = { element: el, context: el.getContext("2d"), drawing: draw }, this.list.push(obj), this.draw(obj, KEYFRAME))) },
            set: function(el, draw) {
                var i;
                for ("string" == typeof el && (el = document.getElementById(el)), i = this.list.length; i--;)
                    if (this.list[i].element === el) return this.list[i].drawing = draw, void this.draw(this.list[i], KEYFRAME);
                this.add(el, draw)
            },
            remove: function(el) {
                var i;
                for ("string" == typeof el && (el = document.getElementById(el)), i = this.list.length; i--;)
                    if (this.list[i].element === el) return void this.list.splice(i, 1)
            },
            draw: function(obj, time) {
                var canvas = obj.context.canvas;
                this.resizeClear ? canvas.width = canvas.width : obj.context.clearRect(0, 0, canvas.width, canvas.height), obj.drawing(obj.context, time, this.color)
            },
            play: function() {
                var self = this;
                this.pause(), this.interval = requestInterval(function() { var i, now = Date.now(); for (i = self.list.length; i--;) self.draw(self.list[i], now) }, 1e3 / 60)
            },
            pause: function() { this.interval && (cancelInterval(this.interval), this.interval = null) }
        }, global.Skycons = Skycons
    }(this), app.run(function(editableOptions) { editableOptions.theme = "bs3" }), app.controller("SelectLocalCtrl", function($scope, $filter) { $scope.user = { status: 2 }, $scope.statuses = [{ value: 1, text: "status1" }, { value: 2, text: "status2" }, { value: 3, text: "status3" }, { value: 4, text: "status4" }], $scope.showStatus = function() { var selected = $filter("filter")($scope.statuses, { value: $scope.user.status }); return $scope.user.status && selected.length ? selected[0].text : "Not set" } }), app.controller("Html5InputsCtrl", function($scope) { $scope.user = { email: "email@example.com", tel: "123-45-67", number: 29, range: 10, url: "http://example.com", search: "blabla", color: "#6a4415", date: null, time: "12:30", datetime: null, month: null, week: null } }), app.controller("TextareaCtrl", function($scope) { $scope.user = { desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." } }), app.controller("CheckboxCtrl", function($scope) { $scope.user = { remember: !0 } }), app.controller("TextBtnCtrl", function($scope) { $scope.user = { name: "Awesome user" } });