import { Request } from 'koa';
import { IRouterContext } from 'koa-router';

/**
 * Request object
 */
export interface IRequest extends Request {
  /**
   * Multi-media files
   */
  files: any;

  /**
   * Fields parsed from JSON, XML, or FormData
   */
  fields: any;

  /**
   * Authentication object
   */
  auth: {
    /**
     * Auth id
     */
    _id: string;

    /**
     * Thirdparty providers
     */
    providers: Array<{
      name: string;
      openid: string;
    }>;

    /**
     * Roles
     */
    roles: string[];

    /**
     * Wheather owns the document or not
     */
    owns: boolean;
  };

  /**
   * Raw body
   */
  body: string;
}

/**
 * Ycs context
 */
export interface IContext extends IRouterContext {
  /**
   * Request object
   */
  request: IRequest;

  /**
   * Session
   */
  session: { [x: string]: any };
}
