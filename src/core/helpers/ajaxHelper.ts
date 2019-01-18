import * as JQuery from "jquery";
import { string } from "prop-types";

export interface IAjaxResponse<T = any> {
    statusCode?: number;
    ok?: boolean;
    data?: T;
    error?: string;
}

export class AjaxHelper {
    public static GET<T = any>(url: string): Promise<IAjaxResponse<T>> {
        return this.sendAjaxRequest("GET", url);
    }

    private static async sendAjaxRequest(method: string, url: string, data?: any): Promise<IAjaxResponse> {
        const apiDomain = "https://bapi.breather.com/"; // Read it from some kind of config.

        let settings: JQueryAjaxSettings = {
            method: method,
            url: encodeURI(apiDomain + url),
            headers: {
                "x-api-key": "gMRjSiTpyMtPNlpYCPz3dK3YGpJGD4ed" // This should not be hard-coded.
            }
        }

        if (data !== undefined) {
            settings.contentType = "application/json; charset=utf-8";
            settings.data = JSON.stringify(data);
        }

        let response: IAjaxResponse = {
            ok: false
        }

        return new Promise((resolve, reject) => {
            JQuery.ajax(settings).done((data, status, jqXHR) => {
                response.data = data;
                response.statusCode = jqXHR.status;
                response.ok = true;

                resolve(response);
            }).fail((jqXHR, status, error) => {
                response.statusCode = jqXHR.status;
                response.error = error;
                response.ok = false;

                reject(response);
            })
        });
    }
}