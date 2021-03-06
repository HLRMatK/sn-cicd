const Promise = require('bluebird');
const assign = require('object-assign-deep');
const EventEmitter = require('events').EventEmitter
var inherits = require('util').inherits

const CICDInt = function () {
    EventEmitter.call(this);
};

CICDInt.prototype = {

    emit: EventEmitter.prototype.emit,
    once: EventEmitter.prototype.once,

    Git: require("sn-project/lib/git"),
    Slack: require("./slack"),
    SnClient: require('./snClient'),

    db: {
        application: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        },
        us: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        },
        run: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        },
        step: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        },
        test: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        },
        deployment: {
            get: function () {
                return Promise.try(() => { });
            },
            insert: function () {
                return Promise.try(() => { });
            },
            update: function () {
                return Promise.try(() => { });
            },
            delete: function () {
                return Promise.try(() => { });
            },
            find: function () {
                return Promise.try(() => { });
            }
        }
    },

    configure: function () {
        return Promise.try(() => { });
    },

    createRemoteRepo: function (config, repoName) {
        console.log('=====> Extend CICD \'CICD.prototype.createRemoteRepo \' with your own code to check if there is already a pending pull request', repoName);
        return Promise.try(() => { });
    },
    pendingPullRequest: function ({ config, repoName, from }) {
        console.log('=====> Extend CICD \'CICD.prototype.pendingPullRequest \' with your own code to check if there is already a pending pull request', repoName, from);
        return Promise.try(() => { return false; });
    },

    raisePullRequest: function ({ config, requestor, repoName, from, to, title, description }) {
        console.log('=====> Extend CICD \'CICD.prototype.raisePullRequest \' with your own code to raise a pull request', requestor, repoName, from, to, title, description);
        return Promise.try(() => {
            return this.setProgress(config, this.build.COMPLETE);
        });
    },

    build: {
        IN_PROGRESS: 'build_in_progress',
        CODE_REVIEW_PENDING: 'code_review_pending',
        CODE_REVIEW_REJECTED: 'code_review_rejected',
        DEPLOYMENT_IN_PROGRESS: 'deployment_in_progress',
        DEPLOYMENT_MANUAL_INTERACTION: 'deployment_manual_interaction',
        FAILED: 'build_failed',
        COMPLETE: 'complete'
    },

    setProgress: function (config, state) {
        return Promise.try(() => { });
    },

    getApplicationFiles: function (config) {
        console.log('=====> Extend CICD \'CICD.prototype.getApplicationFiles \' with your own code to export all files except the ones in the current update-set');
        return Promise.try(() => { return []; });
    },

    getApplicationTestSuites: function (config) {
        console.log('=====> Extend CICD \'CICD.prototype.getApplicationTestSuites \' with your own code to extract all TestSuites belonging to this App');
        return Promise.try(() => { return []; });
    },

    getApplicationTests: function (config) {
        console.log('=====> Extend CICD \'CICD.prototype.getApplicationTests \' with your own code to extract all TestSuites belonging to this App');
        return Promise.try(() => { return []; });
    },

    /*
    buildUpdateSetOnBranch: function (options) {
        return Promise.try(() => { });
    },
    buildUpdateSet: function (options) { 
        return Promise.try(() => { });
    },
    exportUpdateSet: function (options) { 
        return Promise.try(() => { });
    },
    deployUpdateSet: function (options) {
        return Promise.try(() => { });
    },
    */
    /**
     * Convert the request body to the options format 
     * used in buildUpdateSetOnBranch()
     * 
     * @param {any} body the request body
     * @returns {Promise<Object>} the converted body
     */
    convertBuildBody: function (body) {
        return Promise.try(() => {
            return body;
        });
    },

    /**
     * Convert the request body to the options format 
     * used in gitPullRequestUpdate()
     * 
     * @param {any} body the request body
     * @returns {Promise<Object>} the converted body
     */
    gitPullRequestProxyConvertBody: function (body) {
        return Promise.try(() => {
            return assign({
                action: undefined,
                comment: undefined,
                mergeId: undefined,
                request: {
                    id: undefined,
                    name: undefined,
                    url: undefined
                },
                author: {
                    name: undefined
                },
                reviewers: undefined,
                source: {
                    project: undefined,
                    repository: undefined,
                    branch: undefined
                },
                target: {
                    project: undefined,
                    repository: undefined,
                    branch: undefined
                }
            }, body);
        });
    }
};

CICDInt.prototype.emit = EventEmitter.prototype.emit
CICDInt.prototype.once = EventEmitter.prototype.once
inherits(CICDInt, EventEmitter);

module.exports = CICDInt;
