/* tslint:disable:no-console */

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoggerService {
    // todo based on environment, enable or disable logging

    public debug(message: string, context?: Record<string, any>): void {
        console.debug(message, context);
    }

    public info(message: string, context?: Record<string, any>): void {
        console.info(message, context);
    }

    public warn(message: string, context?: Record<string, any>): void {
        console.warn(message, context);
    }

    public error(message: string, context?: Record<string, any>): void {
        console.error(message, context);
    }

    public log(message: string, context?: Record<string, any>): void {
        console.log(message, context);
    }
}
