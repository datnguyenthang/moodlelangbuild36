// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'com.moodle.moodlemobile';
    static appname = 'Moodle Mobile';
    static desktopappname = 'Moodle Desktop';
    static versioncode = 3600;
    static versionname = '3.6.0';
    static cache_expiration_time = 300000;
    static default_lang = 'en';
    static languages: any = {
        en: 'English',
        vi: 'Tiếng Việt'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static demo_sites: any = {
        student: {
            url: 'https://school.demo.moodle.net',
            username: 'student',
            password: 'moodle'
        },
        teacher: {
            url: 'https://school.demo.moodle.net',
            username: 'teacher',
            password: 'moodle'
        }
    };
    static gcmpn = '694767596569';
    static customurlscheme = 'moodlemobile';
    static siteurl = 'https://training.fecredit.com.vn/';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://moodle.org/mod/page/view.php?id=8148';
    static compilationtime = 1555515431186;
    static lastcommit = '4d06a05bd1bbae39628caecdcd855a7603667cfa';
}
