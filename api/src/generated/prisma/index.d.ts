
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PushSubscription
 * 
 */
export type PushSubscription = $Result.DefaultSelection<Prisma.$PushSubscriptionPayload>
/**
 * Model AdminBlock
 * 
 */
export type AdminBlock = $Result.DefaultSelection<Prisma.$AdminBlockPayload>
/**
 * Model BlockedUser
 * 
 */
export type BlockedUser = $Result.DefaultSelection<Prisma.$BlockedUserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageLike
 * 
 */
export type MessageLike = $Result.DefaultSelection<Prisma.$MessageLikePayload>
/**
 * Model PrivateMessage
 * 
 */
export type PrivateMessage = $Result.DefaultSelection<Prisma.$PrivateMessagePayload>
/**
 * Model PrivateMessageLike
 * 
 */
export type PrivateMessageLike = $Result.DefaultSelection<Prisma.$PrivateMessageLikePayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model UserChatRoom
 * 
 */
export type UserChatRoom = $Result.DefaultSelection<Prisma.$UserChatRoomPayload>
/**
 * Model Friend
 * 
 */
export type Friend = $Result.DefaultSelection<Prisma.$FriendPayload>
/**
 * Model FriendRequest
 * 
 */
export type FriendRequest = $Result.DefaultSelection<Prisma.$FriendRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NON_BINARY: 'NON_BINARY',
  UNDISCLOSED: 'UNDISCLOSED'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Otps
 * const otps = await prisma.otp.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Otps
   * const otps = await prisma.otp.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pushSubscription`: Exposes CRUD operations for the **PushSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PushSubscriptions
    * const pushSubscriptions = await prisma.pushSubscription.findMany()
    * ```
    */
  get pushSubscription(): Prisma.PushSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminBlock`: Exposes CRUD operations for the **AdminBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminBlocks
    * const adminBlocks = await prisma.adminBlock.findMany()
    * ```
    */
  get adminBlock(): Prisma.AdminBlockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockedUser`: Exposes CRUD operations for the **BlockedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockedUsers
    * const blockedUsers = await prisma.blockedUser.findMany()
    * ```
    */
  get blockedUser(): Prisma.BlockedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageLike`: Exposes CRUD operations for the **MessageLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLikes
    * const messageLikes = await prisma.messageLike.findMany()
    * ```
    */
  get messageLike(): Prisma.MessageLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateMessage`: Exposes CRUD operations for the **PrivateMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateMessages
    * const privateMessages = await prisma.privateMessage.findMany()
    * ```
    */
  get privateMessage(): Prisma.PrivateMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateMessageLike`: Exposes CRUD operations for the **PrivateMessageLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateMessageLikes
    * const privateMessageLikes = await prisma.privateMessageLike.findMany()
    * ```
    */
  get privateMessageLike(): Prisma.PrivateMessageLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userChatRoom`: Exposes CRUD operations for the **UserChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserChatRooms
    * const userChatRooms = await prisma.userChatRoom.findMany()
    * ```
    */
  get userChatRoom(): Prisma.UserChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friend`: Exposes CRUD operations for the **Friend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friends
    * const friends = await prisma.friend.findMany()
    * ```
    */
  get friend(): Prisma.FriendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendRequest`: Exposes CRUD operations for the **FriendRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FriendRequests
    * const friendRequests = await prisma.friendRequest.findMany()
    * ```
    */
  get friendRequest(): Prisma.FriendRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Otp: 'Otp',
    User: 'User',
    PushSubscription: 'PushSubscription',
    AdminBlock: 'AdminBlock',
    BlockedUser: 'BlockedUser',
    Message: 'Message',
    MessageLike: 'MessageLike',
    PrivateMessage: 'PrivateMessage',
    PrivateMessageLike: 'PrivateMessageLike',
    ChatRoom: 'ChatRoom',
    UserChatRoom: 'UserChatRoom',
    Friend: 'Friend',
    FriendRequest: 'FriendRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "otp" | "user" | "pushSubscription" | "adminBlock" | "blockedUser" | "message" | "messageLike" | "privateMessage" | "privateMessageLike" | "chatRoom" | "userChatRoom" | "friend" | "friendRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PushSubscription: {
        payload: Prisma.$PushSubscriptionPayload<ExtArgs>
        fields: Prisma.PushSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PushSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.PushSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PushSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          findMany: {
            args: Prisma.PushSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>[]
          }
          create: {
            args: Prisma.PushSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          createMany: {
            args: Prisma.PushSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PushSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          update: {
            args: Prisma.PushSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.PushSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PushSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PushSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PushSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.PushSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePushSubscription>
          }
          groupBy: {
            args: Prisma.PushSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PushSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PushSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      AdminBlock: {
        payload: Prisma.$AdminBlockPayload<ExtArgs>
        fields: Prisma.AdminBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminBlockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminBlockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          findFirst: {
            args: Prisma.AdminBlockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminBlockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          findMany: {
            args: Prisma.AdminBlockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>[]
          }
          create: {
            args: Prisma.AdminBlockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          createMany: {
            args: Prisma.AdminBlockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminBlockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          update: {
            args: Prisma.AdminBlockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          deleteMany: {
            args: Prisma.AdminBlockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminBlockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminBlockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminBlockPayload>
          }
          aggregate: {
            args: Prisma.AdminBlockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminBlock>
          }
          groupBy: {
            args: Prisma.AdminBlockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminBlockCountArgs<ExtArgs>
            result: $Utils.Optional<AdminBlockCountAggregateOutputType> | number
          }
        }
      }
      BlockedUser: {
        payload: Prisma.$BlockedUserPayload<ExtArgs>
        fields: Prisma.BlockedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findFirst: {
            args: Prisma.BlockedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          findMany: {
            args: Prisma.BlockedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>[]
          }
          create: {
            args: Prisma.BlockedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          createMany: {
            args: Prisma.BlockedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlockedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          update: {
            args: Prisma.BlockedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          deleteMany: {
            args: Prisma.BlockedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockedUserPayload>
          }
          aggregate: {
            args: Prisma.BlockedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockedUser>
          }
          groupBy: {
            args: Prisma.BlockedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockedUserCountArgs<ExtArgs>
            result: $Utils.Optional<BlockedUserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageLike: {
        payload: Prisma.$MessageLikePayload<ExtArgs>
        fields: Prisma.MessageLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          findFirst: {
            args: Prisma.MessageLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          findMany: {
            args: Prisma.MessageLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>[]
          }
          create: {
            args: Prisma.MessageLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          createMany: {
            args: Prisma.MessageLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          update: {
            args: Prisma.MessageLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          deleteMany: {
            args: Prisma.MessageLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          aggregate: {
            args: Prisma.MessageLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageLike>
          }
          groupBy: {
            args: Prisma.MessageLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLikeCountArgs<ExtArgs>
            result: $Utils.Optional<MessageLikeCountAggregateOutputType> | number
          }
        }
      }
      PrivateMessage: {
        payload: Prisma.$PrivateMessagePayload<ExtArgs>
        fields: Prisma.PrivateMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findFirst: {
            args: Prisma.PrivateMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          findMany: {
            args: Prisma.PrivateMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>[]
          }
          create: {
            args: Prisma.PrivateMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          createMany: {
            args: Prisma.PrivateMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrivateMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          update: {
            args: Prisma.PrivateMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          deleteMany: {
            args: Prisma.PrivateMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrivateMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessagePayload>
          }
          aggregate: {
            args: Prisma.PrivateMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateMessage>
          }
          groupBy: {
            args: Prisma.PrivateMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageCountAggregateOutputType> | number
          }
        }
      }
      PrivateMessageLike: {
        payload: Prisma.$PrivateMessageLikePayload<ExtArgs>
        fields: Prisma.PrivateMessageLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateMessageLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateMessageLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          findFirst: {
            args: Prisma.PrivateMessageLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateMessageLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          findMany: {
            args: Prisma.PrivateMessageLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>[]
          }
          create: {
            args: Prisma.PrivateMessageLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          createMany: {
            args: Prisma.PrivateMessageLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrivateMessageLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          update: {
            args: Prisma.PrivateMessageLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          deleteMany: {
            args: Prisma.PrivateMessageLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateMessageLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrivateMessageLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateMessageLikePayload>
          }
          aggregate: {
            args: Prisma.PrivateMessageLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateMessageLike>
          }
          groupBy: {
            args: Prisma.PrivateMessageLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateMessageLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateMessageLikeCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      UserChatRoom: {
        payload: Prisma.$UserChatRoomPayload<ExtArgs>
        fields: Prisma.UserChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          findFirst: {
            args: Prisma.UserChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          findMany: {
            args: Prisma.UserChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>[]
          }
          create: {
            args: Prisma.UserChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          createMany: {
            args: Prisma.UserChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          update: {
            args: Prisma.UserChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.UserChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserChatRoomPayload>
          }
          aggregate: {
            args: Prisma.UserChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserChatRoom>
          }
          groupBy: {
            args: Prisma.UserChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<UserChatRoomCountAggregateOutputType> | number
          }
        }
      }
      Friend: {
        payload: Prisma.$FriendPayload<ExtArgs>
        fields: Prisma.FriendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findFirst: {
            args: Prisma.FriendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          findMany: {
            args: Prisma.FriendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>[]
          }
          create: {
            args: Prisma.FriendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          createMany: {
            args: Prisma.FriendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FriendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          update: {
            args: Prisma.FriendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          deleteMany: {
            args: Prisma.FriendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendPayload>
          }
          aggregate: {
            args: Prisma.FriendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriend>
          }
          groupBy: {
            args: Prisma.FriendGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendCountArgs<ExtArgs>
            result: $Utils.Optional<FriendCountAggregateOutputType> | number
          }
        }
      }
      FriendRequest: {
        payload: Prisma.$FriendRequestPayload<ExtArgs>
        fields: Prisma.FriendRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findFirst: {
            args: Prisma.FriendRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          findMany: {
            args: Prisma.FriendRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>[]
          }
          create: {
            args: Prisma.FriendRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          createMany: {
            args: Prisma.FriendRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FriendRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          update: {
            args: Prisma.FriendRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          deleteMany: {
            args: Prisma.FriendRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FriendRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendRequestPayload>
          }
          aggregate: {
            args: Prisma.FriendRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendRequest>
          }
          groupBy: {
            args: Prisma.FriendRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendRequestCountArgs<ExtArgs>
            result: $Utils.Optional<FriendRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    otp?: OtpOmit
    user?: UserOmit
    pushSubscription?: PushSubscriptionOmit
    adminBlock?: AdminBlockOmit
    blockedUser?: BlockedUserOmit
    message?: MessageOmit
    messageLike?: MessageLikeOmit
    privateMessage?: PrivateMessageOmit
    privateMessageLike?: PrivateMessageLikeOmit
    chatRoom?: ChatRoomOmit
    userChatRoom?: UserChatRoomOmit
    friend?: FriendOmit
    friendRequest?: FriendRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pushSubscriptions: number
    blockedUsers: number
    blockedBy: number
    adminBlocks: number
    blocksAdministered: number
    chatRooms: number
    friends: number
    friendOf: number
    createdChatRooms: number
    messages: number
    likedMessages: number
    sentFriendRequests: number
    receivedFriendRequests: number
    sentMessages: number
    receivedMessages: number
    likedPrivateMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pushSubscriptions?: boolean | UserCountOutputTypeCountPushSubscriptionsArgs
    blockedUsers?: boolean | UserCountOutputTypeCountBlockedUsersArgs
    blockedBy?: boolean | UserCountOutputTypeCountBlockedByArgs
    adminBlocks?: boolean | UserCountOutputTypeCountAdminBlocksArgs
    blocksAdministered?: boolean | UserCountOutputTypeCountBlocksAdministeredArgs
    chatRooms?: boolean | UserCountOutputTypeCountChatRoomsArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
    createdChatRooms?: boolean | UserCountOutputTypeCountCreatedChatRoomsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    likedMessages?: boolean | UserCountOutputTypeCountLikedMessagesArgs
    sentFriendRequests?: boolean | UserCountOutputTypeCountSentFriendRequestsArgs
    receivedFriendRequests?: boolean | UserCountOutputTypeCountReceivedFriendRequestsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    likedPrivateMessages?: boolean | UserCountOutputTypeCountLikedPrivateMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdminBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBlocksAdministeredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminBlockWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPrivateMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageLikeWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    likes: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | MessageCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
  }


  /**
   * Count Type PrivateMessageCountOutputType
   */

  export type PrivateMessageCountOutputType = {
    likes: number
  }

  export type PrivateMessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PrivateMessageCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * PrivateMessageCountOutputType without action
   */
  export type PrivateMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageCountOutputType
     */
    select?: PrivateMessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrivateMessageCountOutputType without action
   */
  export type PrivateMessageCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageLikeWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    users: number
    messages: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ChatRoomCountOutputTypeCountUsersArgs
    messages?: boolean | ChatRoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChatRoomWhereInput
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    email: string | null
    otp: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    email: string
    otp: string
    createdAt: Date
    expiresAt: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["otp"]>



  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "createdAt" | "expiresAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      otp: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    password: string | null
    username: string | null
    bio: string | null
    profileImage: string | null
    notification: string | null
    role: $Enums.Role | null
    sex: $Enums.Sex | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    email: string | null
    password: string | null
    username: string | null
    bio: string | null
    profileImage: string | null
    notification: string | null
    role: $Enums.Role | null
    sex: $Enums.Sex | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    password: number
    username: number
    bio: number
    profileImage: number
    notification: number
    role: number
    sex: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    bio?: true
    profileImage?: true
    notification?: true
    role?: true
    sex?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    bio?: true
    profileImage?: true
    notification?: true
    role?: true
    sex?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    bio?: true
    profileImage?: true
    notification?: true
    role?: true
    sex?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    email: string
    password: string
    username: string
    bio: string | null
    profileImage: string
    notification: string
    role: $Enums.Role
    sex: $Enums.Sex
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    bio?: boolean
    profileImage?: boolean
    notification?: boolean
    role?: boolean
    sex?: boolean
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    adminBlocks?: boolean | User$adminBlocksArgs<ExtArgs>
    blocksAdministered?: boolean | User$blocksAdministeredArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    createdChatRooms?: boolean | User$createdChatRoomsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    likedMessages?: boolean | User$likedMessagesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    likedPrivateMessages?: boolean | User$likedPrivateMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    bio?: boolean
    profileImage?: boolean
    notification?: boolean
    role?: boolean
    sex?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "email" | "password" | "username" | "bio" | "profileImage" | "notification" | "role" | "sex", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pushSubscriptions?: boolean | User$pushSubscriptionsArgs<ExtArgs>
    blockedUsers?: boolean | User$blockedUsersArgs<ExtArgs>
    blockedBy?: boolean | User$blockedByArgs<ExtArgs>
    adminBlocks?: boolean | User$adminBlocksArgs<ExtArgs>
    blocksAdministered?: boolean | User$blocksAdministeredArgs<ExtArgs>
    chatRooms?: boolean | User$chatRoomsArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    createdChatRooms?: boolean | User$createdChatRoomsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    likedMessages?: boolean | User$likedMessagesArgs<ExtArgs>
    sentFriendRequests?: boolean | User$sentFriendRequestsArgs<ExtArgs>
    receivedFriendRequests?: boolean | User$receivedFriendRequestsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    likedPrivateMessages?: boolean | User$likedPrivateMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pushSubscriptions: Prisma.$PushSubscriptionPayload<ExtArgs>[]
      blockedUsers: Prisma.$BlockedUserPayload<ExtArgs>[]
      blockedBy: Prisma.$BlockedUserPayload<ExtArgs>[]
      adminBlocks: Prisma.$AdminBlockPayload<ExtArgs>[]
      blocksAdministered: Prisma.$AdminBlockPayload<ExtArgs>[]
      chatRooms: Prisma.$UserChatRoomPayload<ExtArgs>[]
      friends: Prisma.$FriendPayload<ExtArgs>[]
      friendOf: Prisma.$FriendPayload<ExtArgs>[]
      createdChatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      likedMessages: Prisma.$MessageLikePayload<ExtArgs>[]
      sentFriendRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      receivedFriendRequests: Prisma.$FriendRequestPayload<ExtArgs>[]
      sentMessages: Prisma.$PrivateMessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$PrivateMessagePayload<ExtArgs>[]
      likedPrivateMessages: Prisma.$PrivateMessageLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      email: string
      password: string
      username: string
      bio: string | null
      profileImage: string
      notification: string
      role: $Enums.Role
      sex: $Enums.Sex
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pushSubscriptions<T extends User$pushSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$pushSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedUsers<T extends User$blockedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blockedBy<T extends User$blockedByArgs<ExtArgs> = {}>(args?: Subset<T, User$blockedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    adminBlocks<T extends User$adminBlocksArgs<ExtArgs> = {}>(args?: Subset<T, User$adminBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blocksAdministered<T extends User$blocksAdministeredArgs<ExtArgs> = {}>(args?: Subset<T, User$blocksAdministeredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRooms<T extends User$chatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdChatRooms<T extends User$createdChatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdChatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedMessages<T extends User$likedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$likedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentFriendRequests<T extends User$sentFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedFriendRequests<T extends User$receivedFriendRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedFriendRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedPrivateMessages<T extends User$likedPrivateMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPrivateMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly notification: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly sex: FieldRef<"User", 'Sex'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pushSubscriptions
   */
  export type User$pushSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    cursor?: PushSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * User.blockedUsers
   */
  export type User$blockedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * User.blockedBy
   */
  export type User$blockedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    cursor?: BlockedUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * User.adminBlocks
   */
  export type User$adminBlocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    where?: AdminBlockWhereInput
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    cursor?: AdminBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminBlockScalarFieldEnum | AdminBlockScalarFieldEnum[]
  }

  /**
   * User.blocksAdministered
   */
  export type User$blocksAdministeredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    where?: AdminBlockWhereInput
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    cursor?: AdminBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminBlockScalarFieldEnum | AdminBlockScalarFieldEnum[]
  }

  /**
   * User.chatRooms
   */
  export type User$chatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    where?: UserChatRoomWhereInput
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    cursor?: UserChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChatRoomScalarFieldEnum | UserChatRoomScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    cursor?: FriendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * User.createdChatRooms
   */
  export type User$createdChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.likedMessages
   */
  export type User$likedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    cursor?: MessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }

  /**
   * User.sentFriendRequests
   */
  export type User$sentFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.receivedFriendRequests
   */
  export type User$receivedFriendRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    cursor?: FriendRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    cursor?: PrivateMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * User.likedPrivateMessages
   */
  export type User$likedPrivateMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    where?: PrivateMessageLikeWhereInput
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    cursor?: PrivateMessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageLikeScalarFieldEnum | PrivateMessageLikeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PushSubscription
   */

  export type AggregatePushSubscription = {
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  export type PushSubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PushSubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PushSubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    endpoint: string | null
    endpointHash: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushSubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    endpoint: string | null
    endpointHash: string | null
    p256dh: string | null
    auth: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PushSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    endpointHash: number
    p256dh: number
    auth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PushSubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PushSubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PushSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    endpointHash?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    endpointHash?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PushSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    endpointHash?: true
    p256dh?: true
    auth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PushSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscription to aggregate.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PushSubscriptions
    **/
    _count?: true | PushSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PushSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PushSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PushSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type GetPushSubscriptionAggregateType<T extends PushSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePushSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePushSubscription[P]>
      : GetScalarType<T[P], AggregatePushSubscription[P]>
  }




  export type PushSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PushSubscriptionWhereInput
    orderBy?: PushSubscriptionOrderByWithAggregationInput | PushSubscriptionOrderByWithAggregationInput[]
    by: PushSubscriptionScalarFieldEnum[] | PushSubscriptionScalarFieldEnum
    having?: PushSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PushSubscriptionCountAggregateInputType | true
    _avg?: PushSubscriptionAvgAggregateInputType
    _sum?: PushSubscriptionSumAggregateInputType
    _min?: PushSubscriptionMinAggregateInputType
    _max?: PushSubscriptionMaxAggregateInputType
  }

  export type PushSubscriptionGroupByOutputType = {
    id: number
    userId: number
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt: Date
    updatedAt: Date
    _count: PushSubscriptionCountAggregateOutputType | null
    _avg: PushSubscriptionAvgAggregateOutputType | null
    _sum: PushSubscriptionSumAggregateOutputType | null
    _min: PushSubscriptionMinAggregateOutputType | null
    _max: PushSubscriptionMaxAggregateOutputType | null
  }

  type GetPushSubscriptionGroupByPayload<T extends PushSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PushSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PushSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PushSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type PushSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    endpointHash?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pushSubscription"]>



  export type PushSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    endpointHash?: boolean
    p256dh?: boolean
    auth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PushSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "endpoint" | "endpointHash" | "p256dh" | "auth" | "createdAt" | "updatedAt", ExtArgs["result"]["pushSubscription"]>
  export type PushSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PushSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PushSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      endpoint: string
      endpointHash: string
      p256dh: string
      auth: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pushSubscription"]>
    composites: {}
  }

  type PushSubscriptionGetPayload<S extends boolean | null | undefined | PushSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$PushSubscriptionPayload, S>

  type PushSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PushSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PushSubscriptionCountAggregateInputType | true
    }

  export interface PushSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PushSubscription'], meta: { name: 'PushSubscription' } }
    /**
     * Find zero or one PushSubscription that matches the filter.
     * @param {PushSubscriptionFindUniqueArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PushSubscriptionFindUniqueArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PushSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PushSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PushSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PushSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PushSubscriptionFindFirstArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PushSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindFirstOrThrowArgs} args - Arguments to find a PushSubscription
     * @example
     * // Get one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PushSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PushSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PushSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany()
     * 
     * // Get first 10 PushSubscriptions
     * const pushSubscriptions = await prisma.pushSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pushSubscriptionWithIdOnly = await prisma.pushSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PushSubscriptionFindManyArgs>(args?: SelectSubset<T, PushSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PushSubscription.
     * @param {PushSubscriptionCreateArgs} args - Arguments to create a PushSubscription.
     * @example
     * // Create one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.create({
     *   data: {
     *     // ... data to create a PushSubscription
     *   }
     * })
     * 
     */
    create<T extends PushSubscriptionCreateArgs>(args: SelectSubset<T, PushSubscriptionCreateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PushSubscriptions.
     * @param {PushSubscriptionCreateManyArgs} args - Arguments to create many PushSubscriptions.
     * @example
     * // Create many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PushSubscriptionCreateManyArgs>(args?: SelectSubset<T, PushSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PushSubscription.
     * @param {PushSubscriptionDeleteArgs} args - Arguments to delete one PushSubscription.
     * @example
     * // Delete one PushSubscription
     * const PushSubscription = await prisma.pushSubscription.delete({
     *   where: {
     *     // ... filter to delete one PushSubscription
     *   }
     * })
     * 
     */
    delete<T extends PushSubscriptionDeleteArgs>(args: SelectSubset<T, PushSubscriptionDeleteArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PushSubscription.
     * @param {PushSubscriptionUpdateArgs} args - Arguments to update one PushSubscription.
     * @example
     * // Update one PushSubscription
     * const pushSubscription = await prisma.pushSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PushSubscriptionUpdateArgs>(args: SelectSubset<T, PushSubscriptionUpdateArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PushSubscriptions.
     * @param {PushSubscriptionDeleteManyArgs} args - Arguments to filter PushSubscriptions to delete.
     * @example
     * // Delete a few PushSubscriptions
     * const { count } = await prisma.pushSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PushSubscriptionDeleteManyArgs>(args?: SelectSubset<T, PushSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PushSubscriptions
     * const pushSubscription = await prisma.pushSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PushSubscriptionUpdateManyArgs>(args: SelectSubset<T, PushSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PushSubscription.
     * @param {PushSubscriptionUpsertArgs} args - Arguments to update or create a PushSubscription.
     * @example
     * // Update or create a PushSubscription
     * const pushSubscription = await prisma.pushSubscription.upsert({
     *   create: {
     *     // ... data to create a PushSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PushSubscription we want to update
     *   }
     * })
     */
    upsert<T extends PushSubscriptionUpsertArgs>(args: SelectSubset<T, PushSubscriptionUpsertArgs<ExtArgs>>): Prisma__PushSubscriptionClient<$Result.GetResult<Prisma.$PushSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PushSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionCountArgs} args - Arguments to filter PushSubscriptions to count.
     * @example
     * // Count the number of PushSubscriptions
     * const count = await prisma.pushSubscription.count({
     *   where: {
     *     // ... the filter for the PushSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends PushSubscriptionCountArgs>(
      args?: Subset<T, PushSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PushSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PushSubscriptionAggregateArgs>(args: Subset<T, PushSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetPushSubscriptionAggregateType<T>>

    /**
     * Group by PushSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PushSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PushSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PushSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: PushSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PushSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPushSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PushSubscription model
   */
  readonly fields: PushSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PushSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PushSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PushSubscription model
   */
  interface PushSubscriptionFieldRefs {
    readonly id: FieldRef<"PushSubscription", 'Int'>
    readonly userId: FieldRef<"PushSubscription", 'Int'>
    readonly endpoint: FieldRef<"PushSubscription", 'String'>
    readonly endpointHash: FieldRef<"PushSubscription", 'String'>
    readonly p256dh: FieldRef<"PushSubscription", 'String'>
    readonly auth: FieldRef<"PushSubscription", 'String'>
    readonly createdAt: FieldRef<"PushSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"PushSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PushSubscription findUnique
   */
  export type PushSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findUniqueOrThrow
   */
  export type PushSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription findFirst
   */
  export type PushSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findFirstOrThrow
   */
  export type PushSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscription to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PushSubscriptions.
     */
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription findMany
   */
  export type PushSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which PushSubscriptions to fetch.
     */
    where?: PushSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PushSubscriptions to fetch.
     */
    orderBy?: PushSubscriptionOrderByWithRelationInput | PushSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PushSubscriptions.
     */
    cursor?: PushSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PushSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PushSubscriptions.
     */
    skip?: number
    distinct?: PushSubscriptionScalarFieldEnum | PushSubscriptionScalarFieldEnum[]
  }

  /**
   * PushSubscription create
   */
  export type PushSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a PushSubscription.
     */
    data: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
  }

  /**
   * PushSubscription createMany
   */
  export type PushSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PushSubscriptions.
     */
    data: PushSubscriptionCreateManyInput | PushSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PushSubscription update
   */
  export type PushSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a PushSubscription.
     */
    data: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which PushSubscription to update.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription updateMany
   */
  export type PushSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PushSubscriptions.
     */
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which PushSubscriptions to update
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to update.
     */
    limit?: number
  }

  /**
   * PushSubscription upsert
   */
  export type PushSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the PushSubscription to update in case it exists.
     */
    where: PushSubscriptionWhereUniqueInput
    /**
     * In case the PushSubscription found by the `where` argument doesn't exist, create a new PushSubscription with this data.
     */
    create: XOR<PushSubscriptionCreateInput, PushSubscriptionUncheckedCreateInput>
    /**
     * In case the PushSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PushSubscriptionUpdateInput, PushSubscriptionUncheckedUpdateInput>
  }

  /**
   * PushSubscription delete
   */
  export type PushSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which PushSubscription to delete.
     */
    where: PushSubscriptionWhereUniqueInput
  }

  /**
   * PushSubscription deleteMany
   */
  export type PushSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PushSubscriptions to delete
     */
    where?: PushSubscriptionWhereInput
    /**
     * Limit how many PushSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * PushSubscription without action
   */
  export type PushSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PushSubscription
     */
    select?: PushSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PushSubscription
     */
    omit?: PushSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PushSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model AdminBlock
   */

  export type AggregateAdminBlock = {
    _count: AdminBlockCountAggregateOutputType | null
    _avg: AdminBlockAvgAggregateOutputType | null
    _sum: AdminBlockSumAggregateOutputType | null
    _min: AdminBlockMinAggregateOutputType | null
    _max: AdminBlockMaxAggregateOutputType | null
  }

  export type AdminBlockAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type AdminBlockSumAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
  }

  export type AdminBlockMinAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    reason: string | null
    duration: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminBlockMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    adminId: number | null
    reason: string | null
    duration: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminBlockCountAggregateOutputType = {
    id: number
    userId: number
    adminId: number
    reason: number
    duration: number
    isActive: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminBlockAvgAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type AdminBlockSumAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
  }

  export type AdminBlockMinAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    reason?: true
    duration?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminBlockMaxAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    reason?: true
    duration?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminBlockCountAggregateInputType = {
    id?: true
    userId?: true
    adminId?: true
    reason?: true
    duration?: true
    isActive?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminBlockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminBlock to aggregate.
     */
    where?: AdminBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminBlocks to fetch.
     */
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminBlocks
    **/
    _count?: true | AdminBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminBlockMaxAggregateInputType
  }

  export type GetAdminBlockAggregateType<T extends AdminBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminBlock[P]>
      : GetScalarType<T[P], AggregateAdminBlock[P]>
  }




  export type AdminBlockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminBlockWhereInput
    orderBy?: AdminBlockOrderByWithAggregationInput | AdminBlockOrderByWithAggregationInput[]
    by: AdminBlockScalarFieldEnum[] | AdminBlockScalarFieldEnum
    having?: AdminBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminBlockCountAggregateInputType | true
    _avg?: AdminBlockAvgAggregateInputType
    _sum?: AdminBlockSumAggregateInputType
    _min?: AdminBlockMinAggregateInputType
    _max?: AdminBlockMaxAggregateInputType
  }

  export type AdminBlockGroupByOutputType = {
    id: number
    userId: number
    adminId: number
    reason: string
    duration: string
    isActive: boolean
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AdminBlockCountAggregateOutputType | null
    _avg: AdminBlockAvgAggregateOutputType | null
    _sum: AdminBlockSumAggregateOutputType | null
    _min: AdminBlockMinAggregateOutputType | null
    _max: AdminBlockMaxAggregateOutputType | null
  }

  type GetAdminBlockGroupByPayload<T extends AdminBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminBlockGroupByOutputType[P]>
            : GetScalarType<T[P], AdminBlockGroupByOutputType[P]>
        }
      >
    >


  export type AdminBlockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    adminId?: boolean
    reason?: boolean
    duration?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminBlock"]>



  export type AdminBlockSelectScalar = {
    id?: boolean
    userId?: boolean
    adminId?: boolean
    reason?: boolean
    duration?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminBlockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "adminId" | "reason" | "duration" | "isActive" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["adminBlock"]>
  export type AdminBlockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminBlockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminBlock"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      adminId: number
      reason: string
      duration: string
      isActive: boolean
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminBlock"]>
    composites: {}
  }

  type AdminBlockGetPayload<S extends boolean | null | undefined | AdminBlockDefaultArgs> = $Result.GetResult<Prisma.$AdminBlockPayload, S>

  type AdminBlockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminBlockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminBlockCountAggregateInputType | true
    }

  export interface AdminBlockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminBlock'], meta: { name: 'AdminBlock' } }
    /**
     * Find zero or one AdminBlock that matches the filter.
     * @param {AdminBlockFindUniqueArgs} args - Arguments to find a AdminBlock
     * @example
     * // Get one AdminBlock
     * const adminBlock = await prisma.adminBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminBlockFindUniqueArgs>(args: SelectSubset<T, AdminBlockFindUniqueArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminBlock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminBlockFindUniqueOrThrowArgs} args - Arguments to find a AdminBlock
     * @example
     * // Get one AdminBlock
     * const adminBlock = await prisma.adminBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminBlockFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminBlockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockFindFirstArgs} args - Arguments to find a AdminBlock
     * @example
     * // Get one AdminBlock
     * const adminBlock = await prisma.adminBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminBlockFindFirstArgs>(args?: SelectSubset<T, AdminBlockFindFirstArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockFindFirstOrThrowArgs} args - Arguments to find a AdminBlock
     * @example
     * // Get one AdminBlock
     * const adminBlock = await prisma.adminBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminBlockFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminBlockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminBlocks
     * const adminBlocks = await prisma.adminBlock.findMany()
     * 
     * // Get first 10 AdminBlocks
     * const adminBlocks = await prisma.adminBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminBlockWithIdOnly = await prisma.adminBlock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminBlockFindManyArgs>(args?: SelectSubset<T, AdminBlockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminBlock.
     * @param {AdminBlockCreateArgs} args - Arguments to create a AdminBlock.
     * @example
     * // Create one AdminBlock
     * const AdminBlock = await prisma.adminBlock.create({
     *   data: {
     *     // ... data to create a AdminBlock
     *   }
     * })
     * 
     */
    create<T extends AdminBlockCreateArgs>(args: SelectSubset<T, AdminBlockCreateArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminBlocks.
     * @param {AdminBlockCreateManyArgs} args - Arguments to create many AdminBlocks.
     * @example
     * // Create many AdminBlocks
     * const adminBlock = await prisma.adminBlock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminBlockCreateManyArgs>(args?: SelectSubset<T, AdminBlockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdminBlock.
     * @param {AdminBlockDeleteArgs} args - Arguments to delete one AdminBlock.
     * @example
     * // Delete one AdminBlock
     * const AdminBlock = await prisma.adminBlock.delete({
     *   where: {
     *     // ... filter to delete one AdminBlock
     *   }
     * })
     * 
     */
    delete<T extends AdminBlockDeleteArgs>(args: SelectSubset<T, AdminBlockDeleteArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminBlock.
     * @param {AdminBlockUpdateArgs} args - Arguments to update one AdminBlock.
     * @example
     * // Update one AdminBlock
     * const adminBlock = await prisma.adminBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminBlockUpdateArgs>(args: SelectSubset<T, AdminBlockUpdateArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminBlocks.
     * @param {AdminBlockDeleteManyArgs} args - Arguments to filter AdminBlocks to delete.
     * @example
     * // Delete a few AdminBlocks
     * const { count } = await prisma.adminBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminBlockDeleteManyArgs>(args?: SelectSubset<T, AdminBlockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminBlocks
     * const adminBlock = await prisma.adminBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminBlockUpdateManyArgs>(args: SelectSubset<T, AdminBlockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminBlock.
     * @param {AdminBlockUpsertArgs} args - Arguments to update or create a AdminBlock.
     * @example
     * // Update or create a AdminBlock
     * const adminBlock = await prisma.adminBlock.upsert({
     *   create: {
     *     // ... data to create a AdminBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminBlock we want to update
     *   }
     * })
     */
    upsert<T extends AdminBlockUpsertArgs>(args: SelectSubset<T, AdminBlockUpsertArgs<ExtArgs>>): Prisma__AdminBlockClient<$Result.GetResult<Prisma.$AdminBlockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockCountArgs} args - Arguments to filter AdminBlocks to count.
     * @example
     * // Count the number of AdminBlocks
     * const count = await prisma.adminBlock.count({
     *   where: {
     *     // ... the filter for the AdminBlocks we want to count
     *   }
     * })
    **/
    count<T extends AdminBlockCountArgs>(
      args?: Subset<T, AdminBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminBlockAggregateArgs>(args: Subset<T, AdminBlockAggregateArgs>): Prisma.PrismaPromise<GetAdminBlockAggregateType<T>>

    /**
     * Group by AdminBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminBlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminBlockGroupByArgs['orderBy'] }
        : { orderBy?: AdminBlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminBlock model
   */
  readonly fields: AdminBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminBlockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdminBlock model
   */
  interface AdminBlockFieldRefs {
    readonly id: FieldRef<"AdminBlock", 'Int'>
    readonly userId: FieldRef<"AdminBlock", 'Int'>
    readonly adminId: FieldRef<"AdminBlock", 'Int'>
    readonly reason: FieldRef<"AdminBlock", 'String'>
    readonly duration: FieldRef<"AdminBlock", 'String'>
    readonly isActive: FieldRef<"AdminBlock", 'Boolean'>
    readonly startDate: FieldRef<"AdminBlock", 'DateTime'>
    readonly endDate: FieldRef<"AdminBlock", 'DateTime'>
    readonly createdAt: FieldRef<"AdminBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminBlock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminBlock findUnique
   */
  export type AdminBlockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter, which AdminBlock to fetch.
     */
    where: AdminBlockWhereUniqueInput
  }

  /**
   * AdminBlock findUniqueOrThrow
   */
  export type AdminBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter, which AdminBlock to fetch.
     */
    where: AdminBlockWhereUniqueInput
  }

  /**
   * AdminBlock findFirst
   */
  export type AdminBlockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter, which AdminBlock to fetch.
     */
    where?: AdminBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminBlocks to fetch.
     */
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminBlocks.
     */
    cursor?: AdminBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminBlocks.
     */
    distinct?: AdminBlockScalarFieldEnum | AdminBlockScalarFieldEnum[]
  }

  /**
   * AdminBlock findFirstOrThrow
   */
  export type AdminBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter, which AdminBlock to fetch.
     */
    where?: AdminBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminBlocks to fetch.
     */
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminBlocks.
     */
    cursor?: AdminBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminBlocks.
     */
    distinct?: AdminBlockScalarFieldEnum | AdminBlockScalarFieldEnum[]
  }

  /**
   * AdminBlock findMany
   */
  export type AdminBlockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter, which AdminBlocks to fetch.
     */
    where?: AdminBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminBlocks to fetch.
     */
    orderBy?: AdminBlockOrderByWithRelationInput | AdminBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminBlocks.
     */
    cursor?: AdminBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminBlocks.
     */
    skip?: number
    distinct?: AdminBlockScalarFieldEnum | AdminBlockScalarFieldEnum[]
  }

  /**
   * AdminBlock create
   */
  export type AdminBlockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminBlock.
     */
    data: XOR<AdminBlockCreateInput, AdminBlockUncheckedCreateInput>
  }

  /**
   * AdminBlock createMany
   */
  export type AdminBlockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminBlocks.
     */
    data: AdminBlockCreateManyInput | AdminBlockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminBlock update
   */
  export type AdminBlockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminBlock.
     */
    data: XOR<AdminBlockUpdateInput, AdminBlockUncheckedUpdateInput>
    /**
     * Choose, which AdminBlock to update.
     */
    where: AdminBlockWhereUniqueInput
  }

  /**
   * AdminBlock updateMany
   */
  export type AdminBlockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminBlocks.
     */
    data: XOR<AdminBlockUpdateManyMutationInput, AdminBlockUncheckedUpdateManyInput>
    /**
     * Filter which AdminBlocks to update
     */
    where?: AdminBlockWhereInput
    /**
     * Limit how many AdminBlocks to update.
     */
    limit?: number
  }

  /**
   * AdminBlock upsert
   */
  export type AdminBlockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminBlock to update in case it exists.
     */
    where: AdminBlockWhereUniqueInput
    /**
     * In case the AdminBlock found by the `where` argument doesn't exist, create a new AdminBlock with this data.
     */
    create: XOR<AdminBlockCreateInput, AdminBlockUncheckedCreateInput>
    /**
     * In case the AdminBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminBlockUpdateInput, AdminBlockUncheckedUpdateInput>
  }

  /**
   * AdminBlock delete
   */
  export type AdminBlockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
    /**
     * Filter which AdminBlock to delete.
     */
    where: AdminBlockWhereUniqueInput
  }

  /**
   * AdminBlock deleteMany
   */
  export type AdminBlockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminBlocks to delete
     */
    where?: AdminBlockWhereInput
    /**
     * Limit how many AdminBlocks to delete.
     */
    limit?: number
  }

  /**
   * AdminBlock without action
   */
  export type AdminBlockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminBlock
     */
    select?: AdminBlockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminBlock
     */
    omit?: AdminBlockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminBlockInclude<ExtArgs> | null
  }


  /**
   * Model BlockedUser
   */

  export type AggregateBlockedUser = {
    _count: BlockedUserCountAggregateOutputType | null
    _avg: BlockedUserAvgAggregateOutputType | null
    _sum: BlockedUserSumAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  export type BlockedUserAvgAggregateOutputType = {
    id: number | null
    blockerId: number | null
    blockedId: number | null
  }

  export type BlockedUserSumAggregateOutputType = {
    id: number | null
    blockerId: number | null
    blockedId: number | null
  }

  export type BlockedUserMinAggregateOutputType = {
    id: number | null
    blockerId: number | null
    blockedId: number | null
  }

  export type BlockedUserMaxAggregateOutputType = {
    id: number | null
    blockerId: number | null
    blockedId: number | null
  }

  export type BlockedUserCountAggregateOutputType = {
    id: number
    blockerId: number
    blockedId: number
    _all: number
  }


  export type BlockedUserAvgAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockedUserSumAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockedUserMinAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockedUserMaxAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
  }

  export type BlockedUserCountAggregateInputType = {
    id?: true
    blockerId?: true
    blockedId?: true
    _all?: true
  }

  export type BlockedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUser to aggregate.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockedUsers
    **/
    _count?: true | BlockedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockedUserMaxAggregateInputType
  }

  export type GetBlockedUserAggregateType<T extends BlockedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockedUser[P]>
      : GetScalarType<T[P], AggregateBlockedUser[P]>
  }




  export type BlockedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockedUserWhereInput
    orderBy?: BlockedUserOrderByWithAggregationInput | BlockedUserOrderByWithAggregationInput[]
    by: BlockedUserScalarFieldEnum[] | BlockedUserScalarFieldEnum
    having?: BlockedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockedUserCountAggregateInputType | true
    _avg?: BlockedUserAvgAggregateInputType
    _sum?: BlockedUserSumAggregateInputType
    _min?: BlockedUserMinAggregateInputType
    _max?: BlockedUserMaxAggregateInputType
  }

  export type BlockedUserGroupByOutputType = {
    id: number
    blockerId: number
    blockedId: number
    _count: BlockedUserCountAggregateOutputType | null
    _avg: BlockedUserAvgAggregateOutputType | null
    _sum: BlockedUserSumAggregateOutputType | null
    _min: BlockedUserMinAggregateOutputType | null
    _max: BlockedUserMaxAggregateOutputType | null
  }

  type GetBlockedUserGroupByPayload<T extends BlockedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
            : GetScalarType<T[P], BlockedUserGroupByOutputType[P]>
        }
      >
    >


  export type BlockedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockedUser"]>



  export type BlockedUserSelectScalar = {
    id?: boolean
    blockerId?: boolean
    blockedId?: boolean
  }

  export type BlockedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blockerId" | "blockedId", ExtArgs["result"]["blockedUser"]>
  export type BlockedUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blocker?: boolean | UserDefaultArgs<ExtArgs>
    blocked?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BlockedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockedUser"
    objects: {
      blocker: Prisma.$UserPayload<ExtArgs>
      blocked: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      blockerId: number
      blockedId: number
    }, ExtArgs["result"]["blockedUser"]>
    composites: {}
  }

  type BlockedUserGetPayload<S extends boolean | null | undefined | BlockedUserDefaultArgs> = $Result.GetResult<Prisma.$BlockedUserPayload, S>

  type BlockedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockedUserCountAggregateInputType | true
    }

  export interface BlockedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockedUser'], meta: { name: 'BlockedUser' } }
    /**
     * Find zero or one BlockedUser that matches the filter.
     * @param {BlockedUserFindUniqueArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockedUserFindUniqueArgs>(args: SelectSubset<T, BlockedUserFindUniqueArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockedUserFindUniqueOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockedUserFindFirstArgs>(args?: SelectSubset<T, BlockedUserFindFirstArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindFirstOrThrowArgs} args - Arguments to find a BlockedUser
     * @example
     * // Get one BlockedUser
     * const blockedUser = await prisma.blockedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany()
     * 
     * // Get first 10 BlockedUsers
     * const blockedUsers = await prisma.blockedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockedUserWithIdOnly = await prisma.blockedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockedUserFindManyArgs>(args?: SelectSubset<T, BlockedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockedUser.
     * @param {BlockedUserCreateArgs} args - Arguments to create a BlockedUser.
     * @example
     * // Create one BlockedUser
     * const BlockedUser = await prisma.blockedUser.create({
     *   data: {
     *     // ... data to create a BlockedUser
     *   }
     * })
     * 
     */
    create<T extends BlockedUserCreateArgs>(args: SelectSubset<T, BlockedUserCreateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockedUsers.
     * @param {BlockedUserCreateManyArgs} args - Arguments to create many BlockedUsers.
     * @example
     * // Create many BlockedUsers
     * const blockedUser = await prisma.blockedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockedUserCreateManyArgs>(args?: SelectSubset<T, BlockedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlockedUser.
     * @param {BlockedUserDeleteArgs} args - Arguments to delete one BlockedUser.
     * @example
     * // Delete one BlockedUser
     * const BlockedUser = await prisma.blockedUser.delete({
     *   where: {
     *     // ... filter to delete one BlockedUser
     *   }
     * })
     * 
     */
    delete<T extends BlockedUserDeleteArgs>(args: SelectSubset<T, BlockedUserDeleteArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockedUser.
     * @param {BlockedUserUpdateArgs} args - Arguments to update one BlockedUser.
     * @example
     * // Update one BlockedUser
     * const blockedUser = await prisma.blockedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockedUserUpdateArgs>(args: SelectSubset<T, BlockedUserUpdateArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockedUsers.
     * @param {BlockedUserDeleteManyArgs} args - Arguments to filter BlockedUsers to delete.
     * @example
     * // Delete a few BlockedUsers
     * const { count } = await prisma.blockedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockedUserDeleteManyArgs>(args?: SelectSubset<T, BlockedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockedUsers
     * const blockedUser = await prisma.blockedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockedUserUpdateManyArgs>(args: SelectSubset<T, BlockedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockedUser.
     * @param {BlockedUserUpsertArgs} args - Arguments to update or create a BlockedUser.
     * @example
     * // Update or create a BlockedUser
     * const blockedUser = await prisma.blockedUser.upsert({
     *   create: {
     *     // ... data to create a BlockedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockedUser we want to update
     *   }
     * })
     */
    upsert<T extends BlockedUserUpsertArgs>(args: SelectSubset<T, BlockedUserUpsertArgs<ExtArgs>>): Prisma__BlockedUserClient<$Result.GetResult<Prisma.$BlockedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserCountArgs} args - Arguments to filter BlockedUsers to count.
     * @example
     * // Count the number of BlockedUsers
     * const count = await prisma.blockedUser.count({
     *   where: {
     *     // ... the filter for the BlockedUsers we want to count
     *   }
     * })
    **/
    count<T extends BlockedUserCountArgs>(
      args?: Subset<T, BlockedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockedUserAggregateArgs>(args: Subset<T, BlockedUserAggregateArgs>): Prisma.PrismaPromise<GetBlockedUserAggregateType<T>>

    /**
     * Group by BlockedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockedUserGroupByArgs['orderBy'] }
        : { orderBy?: BlockedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockedUser model
   */
  readonly fields: BlockedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blocker<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blocked<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlockedUser model
   */
  interface BlockedUserFieldRefs {
    readonly id: FieldRef<"BlockedUser", 'Int'>
    readonly blockerId: FieldRef<"BlockedUser", 'Int'>
    readonly blockedId: FieldRef<"BlockedUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BlockedUser findUnique
   */
  export type BlockedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findUniqueOrThrow
   */
  export type BlockedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser findFirst
   */
  export type BlockedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findFirstOrThrow
   */
  export type BlockedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUser to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockedUsers.
     */
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser findMany
   */
  export type BlockedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter, which BlockedUsers to fetch.
     */
    where?: BlockedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockedUsers to fetch.
     */
    orderBy?: BlockedUserOrderByWithRelationInput | BlockedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockedUsers.
     */
    cursor?: BlockedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockedUsers.
     */
    skip?: number
    distinct?: BlockedUserScalarFieldEnum | BlockedUserScalarFieldEnum[]
  }

  /**
   * BlockedUser create
   */
  export type BlockedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockedUser.
     */
    data: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
  }

  /**
   * BlockedUser createMany
   */
  export type BlockedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockedUsers.
     */
    data: BlockedUserCreateManyInput | BlockedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockedUser update
   */
  export type BlockedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockedUser.
     */
    data: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
    /**
     * Choose, which BlockedUser to update.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser updateMany
   */
  export type BlockedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockedUsers.
     */
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyInput>
    /**
     * Filter which BlockedUsers to update
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to update.
     */
    limit?: number
  }

  /**
   * BlockedUser upsert
   */
  export type BlockedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockedUser to update in case it exists.
     */
    where: BlockedUserWhereUniqueInput
    /**
     * In case the BlockedUser found by the `where` argument doesn't exist, create a new BlockedUser with this data.
     */
    create: XOR<BlockedUserCreateInput, BlockedUserUncheckedCreateInput>
    /**
     * In case the BlockedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockedUserUpdateInput, BlockedUserUncheckedUpdateInput>
  }

  /**
   * BlockedUser delete
   */
  export type BlockedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
    /**
     * Filter which BlockedUser to delete.
     */
    where: BlockedUserWhereUniqueInput
  }

  /**
   * BlockedUser deleteMany
   */
  export type BlockedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockedUsers to delete
     */
    where?: BlockedUserWhereInput
    /**
     * Limit how many BlockedUsers to delete.
     */
    limit?: number
  }

  /**
   * BlockedUser without action
   */
  export type BlockedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockedUser
     */
    select?: BlockedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockedUser
     */
    omit?: BlockedUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockedUserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    chatRoomId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    chatRoomId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    chatRoomId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    chatRoomId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message: number
    image: number
    createdAt: number
    updatedAt: number
    userId: number
    chatRoomId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    userId?: true
    chatRoomId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    userId?: true
    chatRoomId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatRoomId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatRoomId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    chatRoomId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    message: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    chatRoomId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatRoomId?: boolean
    likes?: boolean | Message$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    message?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    chatRoomId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "image" | "createdAt" | "updatedAt" | "userId" | "chatRoomId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | Message$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      likes: Prisma.$MessageLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      image: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
      chatRoomId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends Message$likesArgs<ExtArgs> = {}>(args?: Subset<T, Message$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly message: FieldRef<"Message", 'String'>
    readonly image: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly userId: FieldRef<"Message", 'Int'>
    readonly chatRoomId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.likes
   */
  export type Message$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    cursor?: MessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageLike
   */

  export type AggregateMessageLike = {
    _count: MessageLikeCountAggregateOutputType | null
    _avg: MessageLikeAvgAggregateOutputType | null
    _sum: MessageLikeSumAggregateOutputType | null
    _min: MessageLikeMinAggregateOutputType | null
    _max: MessageLikeMaxAggregateOutputType | null
  }

  export type MessageLikeAvgAggregateOutputType = {
    messageId: number | null
    userId: number | null
  }

  export type MessageLikeSumAggregateOutputType = {
    messageId: number | null
    userId: number | null
  }

  export type MessageLikeMinAggregateOutputType = {
    messageId: number | null
    userId: number | null
  }

  export type MessageLikeMaxAggregateOutputType = {
    messageId: number | null
    userId: number | null
  }

  export type MessageLikeCountAggregateOutputType = {
    messageId: number
    userId: number
    _all: number
  }


  export type MessageLikeAvgAggregateInputType = {
    messageId?: true
    userId?: true
  }

  export type MessageLikeSumAggregateInputType = {
    messageId?: true
    userId?: true
  }

  export type MessageLikeMinAggregateInputType = {
    messageId?: true
    userId?: true
  }

  export type MessageLikeMaxAggregateInputType = {
    messageId?: true
    userId?: true
  }

  export type MessageLikeCountAggregateInputType = {
    messageId?: true
    userId?: true
    _all?: true
  }

  export type MessageLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLike to aggregate.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLikes
    **/
    _count?: true | MessageLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLikeMaxAggregateInputType
  }

  export type GetMessageLikeAggregateType<T extends MessageLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLike[P]>
      : GetScalarType<T[P], AggregateMessageLike[P]>
  }




  export type MessageLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithAggregationInput | MessageLikeOrderByWithAggregationInput[]
    by: MessageLikeScalarFieldEnum[] | MessageLikeScalarFieldEnum
    having?: MessageLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLikeCountAggregateInputType | true
    _avg?: MessageLikeAvgAggregateInputType
    _sum?: MessageLikeSumAggregateInputType
    _min?: MessageLikeMinAggregateInputType
    _max?: MessageLikeMaxAggregateInputType
  }

  export type MessageLikeGroupByOutputType = {
    messageId: number
    userId: number
    _count: MessageLikeCountAggregateOutputType | null
    _avg: MessageLikeAvgAggregateOutputType | null
    _sum: MessageLikeSumAggregateOutputType | null
    _min: MessageLikeMinAggregateOutputType | null
    _max: MessageLikeMaxAggregateOutputType | null
  }

  type GetMessageLikeGroupByPayload<T extends MessageLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLikeGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLikeGroupByOutputType[P]>
        }
      >
    >


  export type MessageLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    userId?: boolean
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLike"]>



  export type MessageLikeSelectScalar = {
    messageId?: boolean
    userId?: boolean
  }

  export type MessageLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"messageId" | "userId", ExtArgs["result"]["messageLike"]>
  export type MessageLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | MessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessageLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageLike"
    objects: {
      message: Prisma.$MessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      messageId: number
      userId: number
    }, ExtArgs["result"]["messageLike"]>
    composites: {}
  }

  type MessageLikeGetPayload<S extends boolean | null | undefined | MessageLikeDefaultArgs> = $Result.GetResult<Prisma.$MessageLikePayload, S>

  type MessageLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageLikeCountAggregateInputType | true
    }

  export interface MessageLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLike'], meta: { name: 'MessageLike' } }
    /**
     * Find zero or one MessageLike that matches the filter.
     * @param {MessageLikeFindUniqueArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageLikeFindUniqueArgs>(args: SelectSubset<T, MessageLikeFindUniqueArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageLikeFindUniqueOrThrowArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindFirstArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageLikeFindFirstArgs>(args?: SelectSubset<T, MessageLikeFindFirstArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindFirstOrThrowArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLikes
     * const messageLikes = await prisma.messageLike.findMany()
     * 
     * // Get first 10 MessageLikes
     * const messageLikes = await prisma.messageLike.findMany({ take: 10 })
     * 
     * // Only select the `messageId`
     * const messageLikeWithMessageIdOnly = await prisma.messageLike.findMany({ select: { messageId: true } })
     * 
     */
    findMany<T extends MessageLikeFindManyArgs>(args?: SelectSubset<T, MessageLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageLike.
     * @param {MessageLikeCreateArgs} args - Arguments to create a MessageLike.
     * @example
     * // Create one MessageLike
     * const MessageLike = await prisma.messageLike.create({
     *   data: {
     *     // ... data to create a MessageLike
     *   }
     * })
     * 
     */
    create<T extends MessageLikeCreateArgs>(args: SelectSubset<T, MessageLikeCreateArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageLikes.
     * @param {MessageLikeCreateManyArgs} args - Arguments to create many MessageLikes.
     * @example
     * // Create many MessageLikes
     * const messageLike = await prisma.messageLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageLikeCreateManyArgs>(args?: SelectSubset<T, MessageLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageLike.
     * @param {MessageLikeDeleteArgs} args - Arguments to delete one MessageLike.
     * @example
     * // Delete one MessageLike
     * const MessageLike = await prisma.messageLike.delete({
     *   where: {
     *     // ... filter to delete one MessageLike
     *   }
     * })
     * 
     */
    delete<T extends MessageLikeDeleteArgs>(args: SelectSubset<T, MessageLikeDeleteArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageLike.
     * @param {MessageLikeUpdateArgs} args - Arguments to update one MessageLike.
     * @example
     * // Update one MessageLike
     * const messageLike = await prisma.messageLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageLikeUpdateArgs>(args: SelectSubset<T, MessageLikeUpdateArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageLikes.
     * @param {MessageLikeDeleteManyArgs} args - Arguments to filter MessageLikes to delete.
     * @example
     * // Delete a few MessageLikes
     * const { count } = await prisma.messageLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageLikeDeleteManyArgs>(args?: SelectSubset<T, MessageLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLikes
     * const messageLike = await prisma.messageLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageLikeUpdateManyArgs>(args: SelectSubset<T, MessageLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageLike.
     * @param {MessageLikeUpsertArgs} args - Arguments to update or create a MessageLike.
     * @example
     * // Update or create a MessageLike
     * const messageLike = await prisma.messageLike.upsert({
     *   create: {
     *     // ... data to create a MessageLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLike we want to update
     *   }
     * })
     */
    upsert<T extends MessageLikeUpsertArgs>(args: SelectSubset<T, MessageLikeUpsertArgs<ExtArgs>>): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeCountArgs} args - Arguments to filter MessageLikes to count.
     * @example
     * // Count the number of MessageLikes
     * const count = await prisma.messageLike.count({
     *   where: {
     *     // ... the filter for the MessageLikes we want to count
     *   }
     * })
    **/
    count<T extends MessageLikeCountArgs>(
      args?: Subset<T, MessageLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageLikeAggregateArgs>(args: Subset<T, MessageLikeAggregateArgs>): Prisma.PrismaPromise<GetMessageLikeAggregateType<T>>

    /**
     * Group by MessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLikeGroupByArgs['orderBy'] }
        : { orderBy?: MessageLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLike model
   */
  readonly fields: MessageLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MessageLike model
   */
  interface MessageLikeFieldRefs {
    readonly messageId: FieldRef<"MessageLike", 'Int'>
    readonly userId: FieldRef<"MessageLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MessageLike findUnique
   */
  export type MessageLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where: MessageLikeWhereUniqueInput
  }

  /**
   * MessageLike findUniqueOrThrow
   */
  export type MessageLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where: MessageLikeWhereUniqueInput
  }

  /**
   * MessageLike findFirst
   */
  export type MessageLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLikes.
     */
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }

  /**
   * MessageLike findFirstOrThrow
   */
  export type MessageLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLikes.
     */
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }

  /**
   * MessageLike findMany
   */
  export type MessageLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLikes to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }

  /**
   * MessageLike create
   */
  export type MessageLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLike.
     */
    data: XOR<MessageLikeCreateInput, MessageLikeUncheckedCreateInput>
  }

  /**
   * MessageLike createMany
   */
  export type MessageLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLikes.
     */
    data: MessageLikeCreateManyInput | MessageLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageLike update
   */
  export type MessageLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLike.
     */
    data: XOR<MessageLikeUpdateInput, MessageLikeUncheckedUpdateInput>
    /**
     * Choose, which MessageLike to update.
     */
    where: MessageLikeWhereUniqueInput
  }

  /**
   * MessageLike updateMany
   */
  export type MessageLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLikes.
     */
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyInput>
    /**
     * Filter which MessageLikes to update
     */
    where?: MessageLikeWhereInput
    /**
     * Limit how many MessageLikes to update.
     */
    limit?: number
  }

  /**
   * MessageLike upsert
   */
  export type MessageLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLike to update in case it exists.
     */
    where: MessageLikeWhereUniqueInput
    /**
     * In case the MessageLike found by the `where` argument doesn't exist, create a new MessageLike with this data.
     */
    create: XOR<MessageLikeCreateInput, MessageLikeUncheckedCreateInput>
    /**
     * In case the MessageLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLikeUpdateInput, MessageLikeUncheckedUpdateInput>
  }

  /**
   * MessageLike delete
   */
  export type MessageLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter which MessageLike to delete.
     */
    where: MessageLikeWhereUniqueInput
  }

  /**
   * MessageLike deleteMany
   */
  export type MessageLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLikes to delete
     */
    where?: MessageLikeWhereInput
    /**
     * Limit how many MessageLikes to delete.
     */
    limit?: number
  }

  /**
   * MessageLike without action
   */
  export type MessageLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageLike
     */
    omit?: MessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageLikeInclude<ExtArgs> | null
  }


  /**
   * Model PrivateMessage
   */

  export type AggregatePrivateMessage = {
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  export type PrivateMessageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    receiverId: number | null
  }

  export type PrivateMessageSumAggregateOutputType = {
    id: number | null
    userId: number | null
    receiverId: number | null
  }

  export type PrivateMessageMinAggregateOutputType = {
    id: number | null
    message: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    receiverId: number | null
    isRead: boolean | null
  }

  export type PrivateMessageMaxAggregateOutputType = {
    id: number | null
    message: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    receiverId: number | null
    isRead: boolean | null
  }

  export type PrivateMessageCountAggregateOutputType = {
    id: number
    message: number
    image: number
    createdAt: number
    updatedAt: number
    userId: number
    receiverId: number
    isRead: number
    _all: number
  }


  export type PrivateMessageAvgAggregateInputType = {
    id?: true
    userId?: true
    receiverId?: true
  }

  export type PrivateMessageSumAggregateInputType = {
    id?: true
    userId?: true
    receiverId?: true
  }

  export type PrivateMessageMinAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    receiverId?: true
    isRead?: true
  }

  export type PrivateMessageMaxAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    receiverId?: true
    isRead?: true
  }

  export type PrivateMessageCountAggregateInputType = {
    id?: true
    message?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    receiverId?: true
    isRead?: true
    _all?: true
  }

  export type PrivateMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessage to aggregate.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateMessages
    **/
    _count?: true | PrivateMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type GetPrivateMessageAggregateType<T extends PrivateMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateMessage[P]>
      : GetScalarType<T[P], AggregatePrivateMessage[P]>
  }




  export type PrivateMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageWhereInput
    orderBy?: PrivateMessageOrderByWithAggregationInput | PrivateMessageOrderByWithAggregationInput[]
    by: PrivateMessageScalarFieldEnum[] | PrivateMessageScalarFieldEnum
    having?: PrivateMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateMessageCountAggregateInputType | true
    _avg?: PrivateMessageAvgAggregateInputType
    _sum?: PrivateMessageSumAggregateInputType
    _min?: PrivateMessageMinAggregateInputType
    _max?: PrivateMessageMaxAggregateInputType
  }

  export type PrivateMessageGroupByOutputType = {
    id: number
    message: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    receiverId: number
    isRead: boolean
    _count: PrivateMessageCountAggregateOutputType | null
    _avg: PrivateMessageAvgAggregateOutputType | null
    _sum: PrivateMessageSumAggregateOutputType | null
    _min: PrivateMessageMinAggregateOutputType | null
    _max: PrivateMessageMaxAggregateOutputType | null
  }

  type GetPrivateMessageGroupByPayload<T extends PrivateMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateMessageGroupByOutputType[P]>
        }
      >
    >


  export type PrivateMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    receiverId?: boolean
    isRead?: boolean
    likes?: boolean | PrivateMessage$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PrivateMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessage"]>



  export type PrivateMessageSelectScalar = {
    id?: boolean
    message?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    receiverId?: boolean
    isRead?: boolean
  }

  export type PrivateMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "image" | "createdAt" | "updatedAt" | "userId" | "receiverId" | "isRead", ExtArgs["result"]["privateMessage"]>
  export type PrivateMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PrivateMessage$likesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | PrivateMessageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrivateMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateMessage"
    objects: {
      likes: Prisma.$PrivateMessageLikePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message: string
      image: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
      receiverId: number
      isRead: boolean
    }, ExtArgs["result"]["privateMessage"]>
    composites: {}
  }

  type PrivateMessageGetPayload<S extends boolean | null | undefined | PrivateMessageDefaultArgs> = $Result.GetResult<Prisma.$PrivateMessagePayload, S>

  type PrivateMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateMessageCountAggregateInputType | true
    }

  export interface PrivateMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateMessage'], meta: { name: 'PrivateMessage' } }
    /**
     * Find zero or one PrivateMessage that matches the filter.
     * @param {PrivateMessageFindUniqueArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateMessageFindUniqueArgs>(args: SelectSubset<T, PrivateMessageFindUniqueArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateMessageFindUniqueOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateMessageFindFirstArgs>(args?: SelectSubset<T, PrivateMessageFindFirstArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindFirstOrThrowArgs} args - Arguments to find a PrivateMessage
     * @example
     * // Get one PrivateMessage
     * const privateMessage = await prisma.privateMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany()
     * 
     * // Get first 10 PrivateMessages
     * const privateMessages = await prisma.privateMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const privateMessageWithIdOnly = await prisma.privateMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrivateMessageFindManyArgs>(args?: SelectSubset<T, PrivateMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateMessage.
     * @param {PrivateMessageCreateArgs} args - Arguments to create a PrivateMessage.
     * @example
     * // Create one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.create({
     *   data: {
     *     // ... data to create a PrivateMessage
     *   }
     * })
     * 
     */
    create<T extends PrivateMessageCreateArgs>(args: SelectSubset<T, PrivateMessageCreateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateMessages.
     * @param {PrivateMessageCreateManyArgs} args - Arguments to create many PrivateMessages.
     * @example
     * // Create many PrivateMessages
     * const privateMessage = await prisma.privateMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateMessageCreateManyArgs>(args?: SelectSubset<T, PrivateMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrivateMessage.
     * @param {PrivateMessageDeleteArgs} args - Arguments to delete one PrivateMessage.
     * @example
     * // Delete one PrivateMessage
     * const PrivateMessage = await prisma.privateMessage.delete({
     *   where: {
     *     // ... filter to delete one PrivateMessage
     *   }
     * })
     * 
     */
    delete<T extends PrivateMessageDeleteArgs>(args: SelectSubset<T, PrivateMessageDeleteArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateMessage.
     * @param {PrivateMessageUpdateArgs} args - Arguments to update one PrivateMessage.
     * @example
     * // Update one PrivateMessage
     * const privateMessage = await prisma.privateMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateMessageUpdateArgs>(args: SelectSubset<T, PrivateMessageUpdateArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateMessages.
     * @param {PrivateMessageDeleteManyArgs} args - Arguments to filter PrivateMessages to delete.
     * @example
     * // Delete a few PrivateMessages
     * const { count } = await prisma.privateMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateMessageDeleteManyArgs>(args?: SelectSubset<T, PrivateMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateMessages
     * const privateMessage = await prisma.privateMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateMessageUpdateManyArgs>(args: SelectSubset<T, PrivateMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrivateMessage.
     * @param {PrivateMessageUpsertArgs} args - Arguments to update or create a PrivateMessage.
     * @example
     * // Update or create a PrivateMessage
     * const privateMessage = await prisma.privateMessage.upsert({
     *   create: {
     *     // ... data to create a PrivateMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateMessage we want to update
     *   }
     * })
     */
    upsert<T extends PrivateMessageUpsertArgs>(args: SelectSubset<T, PrivateMessageUpsertArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageCountArgs} args - Arguments to filter PrivateMessages to count.
     * @example
     * // Count the number of PrivateMessages
     * const count = await prisma.privateMessage.count({
     *   where: {
     *     // ... the filter for the PrivateMessages we want to count
     *   }
     * })
    **/
    count<T extends PrivateMessageCountArgs>(
      args?: Subset<T, PrivateMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateMessageAggregateArgs>(args: Subset<T, PrivateMessageAggregateArgs>): Prisma.PrismaPromise<GetPrivateMessageAggregateType<T>>

    /**
     * Group by PrivateMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateMessageGroupByArgs['orderBy'] }
        : { orderBy?: PrivateMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateMessage model
   */
  readonly fields: PrivateMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends PrivateMessage$likesArgs<ExtArgs> = {}>(args?: Subset<T, PrivateMessage$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateMessage model
   */
  interface PrivateMessageFieldRefs {
    readonly id: FieldRef<"PrivateMessage", 'Int'>
    readonly message: FieldRef<"PrivateMessage", 'String'>
    readonly image: FieldRef<"PrivateMessage", 'String'>
    readonly createdAt: FieldRef<"PrivateMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"PrivateMessage", 'DateTime'>
    readonly userId: FieldRef<"PrivateMessage", 'Int'>
    readonly receiverId: FieldRef<"PrivateMessage", 'Int'>
    readonly isRead: FieldRef<"PrivateMessage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PrivateMessage findUnique
   */
  export type PrivateMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findUniqueOrThrow
   */
  export type PrivateMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage findFirst
   */
  export type PrivateMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findFirstOrThrow
   */
  export type PrivateMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessage to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessages.
     */
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage findMany
   */
  export type PrivateMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessages to fetch.
     */
    where?: PrivateMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessages to fetch.
     */
    orderBy?: PrivateMessageOrderByWithRelationInput | PrivateMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateMessages.
     */
    cursor?: PrivateMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessages.
     */
    skip?: number
    distinct?: PrivateMessageScalarFieldEnum | PrivateMessageScalarFieldEnum[]
  }

  /**
   * PrivateMessage create
   */
  export type PrivateMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateMessage.
     */
    data: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
  }

  /**
   * PrivateMessage createMany
   */
  export type PrivateMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateMessages.
     */
    data: PrivateMessageCreateManyInput | PrivateMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateMessage update
   */
  export type PrivateMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateMessage.
     */
    data: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
    /**
     * Choose, which PrivateMessage to update.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage updateMany
   */
  export type PrivateMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateMessages.
     */
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessages to update
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to update.
     */
    limit?: number
  }

  /**
   * PrivateMessage upsert
   */
  export type PrivateMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateMessage to update in case it exists.
     */
    where: PrivateMessageWhereUniqueInput
    /**
     * In case the PrivateMessage found by the `where` argument doesn't exist, create a new PrivateMessage with this data.
     */
    create: XOR<PrivateMessageCreateInput, PrivateMessageUncheckedCreateInput>
    /**
     * In case the PrivateMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateMessageUpdateInput, PrivateMessageUncheckedUpdateInput>
  }

  /**
   * PrivateMessage delete
   */
  export type PrivateMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
    /**
     * Filter which PrivateMessage to delete.
     */
    where: PrivateMessageWhereUniqueInput
  }

  /**
   * PrivateMessage deleteMany
   */
  export type PrivateMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessages to delete
     */
    where?: PrivateMessageWhereInput
    /**
     * Limit how many PrivateMessages to delete.
     */
    limit?: number
  }

  /**
   * PrivateMessage.likes
   */
  export type PrivateMessage$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    where?: PrivateMessageLikeWhereInput
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    cursor?: PrivateMessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateMessageLikeScalarFieldEnum | PrivateMessageLikeScalarFieldEnum[]
  }

  /**
   * PrivateMessage without action
   */
  export type PrivateMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessage
     */
    select?: PrivateMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessage
     */
    omit?: PrivateMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageInclude<ExtArgs> | null
  }


  /**
   * Model PrivateMessageLike
   */

  export type AggregatePrivateMessageLike = {
    _count: PrivateMessageLikeCountAggregateOutputType | null
    _avg: PrivateMessageLikeAvgAggregateOutputType | null
    _sum: PrivateMessageLikeSumAggregateOutputType | null
    _min: PrivateMessageLikeMinAggregateOutputType | null
    _max: PrivateMessageLikeMaxAggregateOutputType | null
  }

  export type PrivateMessageLikeAvgAggregateOutputType = {
    privateMessageId: number | null
    userId: number | null
  }

  export type PrivateMessageLikeSumAggregateOutputType = {
    privateMessageId: number | null
    userId: number | null
  }

  export type PrivateMessageLikeMinAggregateOutputType = {
    privateMessageId: number | null
    userId: number | null
  }

  export type PrivateMessageLikeMaxAggregateOutputType = {
    privateMessageId: number | null
    userId: number | null
  }

  export type PrivateMessageLikeCountAggregateOutputType = {
    privateMessageId: number
    userId: number
    _all: number
  }


  export type PrivateMessageLikeAvgAggregateInputType = {
    privateMessageId?: true
    userId?: true
  }

  export type PrivateMessageLikeSumAggregateInputType = {
    privateMessageId?: true
    userId?: true
  }

  export type PrivateMessageLikeMinAggregateInputType = {
    privateMessageId?: true
    userId?: true
  }

  export type PrivateMessageLikeMaxAggregateInputType = {
    privateMessageId?: true
    userId?: true
  }

  export type PrivateMessageLikeCountAggregateInputType = {
    privateMessageId?: true
    userId?: true
    _all?: true
  }

  export type PrivateMessageLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessageLike to aggregate.
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessageLikes to fetch.
     */
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateMessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateMessageLikes
    **/
    _count?: true | PrivateMessageLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateMessageLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateMessageLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateMessageLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateMessageLikeMaxAggregateInputType
  }

  export type GetPrivateMessageLikeAggregateType<T extends PrivateMessageLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateMessageLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateMessageLike[P]>
      : GetScalarType<T[P], AggregatePrivateMessageLike[P]>
  }




  export type PrivateMessageLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateMessageLikeWhereInput
    orderBy?: PrivateMessageLikeOrderByWithAggregationInput | PrivateMessageLikeOrderByWithAggregationInput[]
    by: PrivateMessageLikeScalarFieldEnum[] | PrivateMessageLikeScalarFieldEnum
    having?: PrivateMessageLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateMessageLikeCountAggregateInputType | true
    _avg?: PrivateMessageLikeAvgAggregateInputType
    _sum?: PrivateMessageLikeSumAggregateInputType
    _min?: PrivateMessageLikeMinAggregateInputType
    _max?: PrivateMessageLikeMaxAggregateInputType
  }

  export type PrivateMessageLikeGroupByOutputType = {
    privateMessageId: number
    userId: number
    _count: PrivateMessageLikeCountAggregateOutputType | null
    _avg: PrivateMessageLikeAvgAggregateOutputType | null
    _sum: PrivateMessageLikeSumAggregateOutputType | null
    _min: PrivateMessageLikeMinAggregateOutputType | null
    _max: PrivateMessageLikeMaxAggregateOutputType | null
  }

  type GetPrivateMessageLikeGroupByPayload<T extends PrivateMessageLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateMessageLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateMessageLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateMessageLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateMessageLikeGroupByOutputType[P]>
        }
      >
    >


  export type PrivateMessageLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    privateMessageId?: boolean
    userId?: boolean
    privateMessage?: boolean | PrivateMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["privateMessageLike"]>



  export type PrivateMessageLikeSelectScalar = {
    privateMessageId?: boolean
    userId?: boolean
  }

  export type PrivateMessageLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"privateMessageId" | "userId", ExtArgs["result"]["privateMessageLike"]>
  export type PrivateMessageLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    privateMessage?: boolean | PrivateMessageDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PrivateMessageLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateMessageLike"
    objects: {
      privateMessage: Prisma.$PrivateMessagePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      privateMessageId: number
      userId: number
    }, ExtArgs["result"]["privateMessageLike"]>
    composites: {}
  }

  type PrivateMessageLikeGetPayload<S extends boolean | null | undefined | PrivateMessageLikeDefaultArgs> = $Result.GetResult<Prisma.$PrivateMessageLikePayload, S>

  type PrivateMessageLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateMessageLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateMessageLikeCountAggregateInputType | true
    }

  export interface PrivateMessageLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateMessageLike'], meta: { name: 'PrivateMessageLike' } }
    /**
     * Find zero or one PrivateMessageLike that matches the filter.
     * @param {PrivateMessageLikeFindUniqueArgs} args - Arguments to find a PrivateMessageLike
     * @example
     * // Get one PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateMessageLikeFindUniqueArgs>(args: SelectSubset<T, PrivateMessageLikeFindUniqueArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateMessageLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateMessageLikeFindUniqueOrThrowArgs} args - Arguments to find a PrivateMessageLike
     * @example
     * // Get one PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateMessageLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateMessageLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessageLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeFindFirstArgs} args - Arguments to find a PrivateMessageLike
     * @example
     * // Get one PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateMessageLikeFindFirstArgs>(args?: SelectSubset<T, PrivateMessageLikeFindFirstArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateMessageLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeFindFirstOrThrowArgs} args - Arguments to find a PrivateMessageLike
     * @example
     * // Get one PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateMessageLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateMessageLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateMessageLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateMessageLikes
     * const privateMessageLikes = await prisma.privateMessageLike.findMany()
     * 
     * // Get first 10 PrivateMessageLikes
     * const privateMessageLikes = await prisma.privateMessageLike.findMany({ take: 10 })
     * 
     * // Only select the `privateMessageId`
     * const privateMessageLikeWithPrivateMessageIdOnly = await prisma.privateMessageLike.findMany({ select: { privateMessageId: true } })
     * 
     */
    findMany<T extends PrivateMessageLikeFindManyArgs>(args?: SelectSubset<T, PrivateMessageLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateMessageLike.
     * @param {PrivateMessageLikeCreateArgs} args - Arguments to create a PrivateMessageLike.
     * @example
     * // Create one PrivateMessageLike
     * const PrivateMessageLike = await prisma.privateMessageLike.create({
     *   data: {
     *     // ... data to create a PrivateMessageLike
     *   }
     * })
     * 
     */
    create<T extends PrivateMessageLikeCreateArgs>(args: SelectSubset<T, PrivateMessageLikeCreateArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateMessageLikes.
     * @param {PrivateMessageLikeCreateManyArgs} args - Arguments to create many PrivateMessageLikes.
     * @example
     * // Create many PrivateMessageLikes
     * const privateMessageLike = await prisma.privateMessageLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateMessageLikeCreateManyArgs>(args?: SelectSubset<T, PrivateMessageLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrivateMessageLike.
     * @param {PrivateMessageLikeDeleteArgs} args - Arguments to delete one PrivateMessageLike.
     * @example
     * // Delete one PrivateMessageLike
     * const PrivateMessageLike = await prisma.privateMessageLike.delete({
     *   where: {
     *     // ... filter to delete one PrivateMessageLike
     *   }
     * })
     * 
     */
    delete<T extends PrivateMessageLikeDeleteArgs>(args: SelectSubset<T, PrivateMessageLikeDeleteArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateMessageLike.
     * @param {PrivateMessageLikeUpdateArgs} args - Arguments to update one PrivateMessageLike.
     * @example
     * // Update one PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateMessageLikeUpdateArgs>(args: SelectSubset<T, PrivateMessageLikeUpdateArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateMessageLikes.
     * @param {PrivateMessageLikeDeleteManyArgs} args - Arguments to filter PrivateMessageLikes to delete.
     * @example
     * // Delete a few PrivateMessageLikes
     * const { count } = await prisma.privateMessageLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateMessageLikeDeleteManyArgs>(args?: SelectSubset<T, PrivateMessageLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateMessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateMessageLikes
     * const privateMessageLike = await prisma.privateMessageLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateMessageLikeUpdateManyArgs>(args: SelectSubset<T, PrivateMessageLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrivateMessageLike.
     * @param {PrivateMessageLikeUpsertArgs} args - Arguments to update or create a PrivateMessageLike.
     * @example
     * // Update or create a PrivateMessageLike
     * const privateMessageLike = await prisma.privateMessageLike.upsert({
     *   create: {
     *     // ... data to create a PrivateMessageLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateMessageLike we want to update
     *   }
     * })
     */
    upsert<T extends PrivateMessageLikeUpsertArgs>(args: SelectSubset<T, PrivateMessageLikeUpsertArgs<ExtArgs>>): Prisma__PrivateMessageLikeClient<$Result.GetResult<Prisma.$PrivateMessageLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateMessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeCountArgs} args - Arguments to filter PrivateMessageLikes to count.
     * @example
     * // Count the number of PrivateMessageLikes
     * const count = await prisma.privateMessageLike.count({
     *   where: {
     *     // ... the filter for the PrivateMessageLikes we want to count
     *   }
     * })
    **/
    count<T extends PrivateMessageLikeCountArgs>(
      args?: Subset<T, PrivateMessageLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateMessageLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateMessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateMessageLikeAggregateArgs>(args: Subset<T, PrivateMessageLikeAggregateArgs>): Prisma.PrismaPromise<GetPrivateMessageLikeAggregateType<T>>

    /**
     * Group by PrivateMessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateMessageLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateMessageLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateMessageLikeGroupByArgs['orderBy'] }
        : { orderBy?: PrivateMessageLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateMessageLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateMessageLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateMessageLike model
   */
  readonly fields: PrivateMessageLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateMessageLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateMessageLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    privateMessage<T extends PrivateMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrivateMessageDefaultArgs<ExtArgs>>): Prisma__PrivateMessageClient<$Result.GetResult<Prisma.$PrivateMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateMessageLike model
   */
  interface PrivateMessageLikeFieldRefs {
    readonly privateMessageId: FieldRef<"PrivateMessageLike", 'Int'>
    readonly userId: FieldRef<"PrivateMessageLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PrivateMessageLike findUnique
   */
  export type PrivateMessageLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessageLike to fetch.
     */
    where: PrivateMessageLikeWhereUniqueInput
  }

  /**
   * PrivateMessageLike findUniqueOrThrow
   */
  export type PrivateMessageLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessageLike to fetch.
     */
    where: PrivateMessageLikeWhereUniqueInput
  }

  /**
   * PrivateMessageLike findFirst
   */
  export type PrivateMessageLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessageLike to fetch.
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessageLikes to fetch.
     */
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessageLikes.
     */
    cursor?: PrivateMessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessageLikes.
     */
    distinct?: PrivateMessageLikeScalarFieldEnum | PrivateMessageLikeScalarFieldEnum[]
  }

  /**
   * PrivateMessageLike findFirstOrThrow
   */
  export type PrivateMessageLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessageLike to fetch.
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessageLikes to fetch.
     */
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateMessageLikes.
     */
    cursor?: PrivateMessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateMessageLikes.
     */
    distinct?: PrivateMessageLikeScalarFieldEnum | PrivateMessageLikeScalarFieldEnum[]
  }

  /**
   * PrivateMessageLike findMany
   */
  export type PrivateMessageLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which PrivateMessageLikes to fetch.
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateMessageLikes to fetch.
     */
    orderBy?: PrivateMessageLikeOrderByWithRelationInput | PrivateMessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateMessageLikes.
     */
    cursor?: PrivateMessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateMessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateMessageLikes.
     */
    skip?: number
    distinct?: PrivateMessageLikeScalarFieldEnum | PrivateMessageLikeScalarFieldEnum[]
  }

  /**
   * PrivateMessageLike create
   */
  export type PrivateMessageLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateMessageLike.
     */
    data: XOR<PrivateMessageLikeCreateInput, PrivateMessageLikeUncheckedCreateInput>
  }

  /**
   * PrivateMessageLike createMany
   */
  export type PrivateMessageLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateMessageLikes.
     */
    data: PrivateMessageLikeCreateManyInput | PrivateMessageLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateMessageLike update
   */
  export type PrivateMessageLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateMessageLike.
     */
    data: XOR<PrivateMessageLikeUpdateInput, PrivateMessageLikeUncheckedUpdateInput>
    /**
     * Choose, which PrivateMessageLike to update.
     */
    where: PrivateMessageLikeWhereUniqueInput
  }

  /**
   * PrivateMessageLike updateMany
   */
  export type PrivateMessageLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateMessageLikes.
     */
    data: XOR<PrivateMessageLikeUpdateManyMutationInput, PrivateMessageLikeUncheckedUpdateManyInput>
    /**
     * Filter which PrivateMessageLikes to update
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * Limit how many PrivateMessageLikes to update.
     */
    limit?: number
  }

  /**
   * PrivateMessageLike upsert
   */
  export type PrivateMessageLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateMessageLike to update in case it exists.
     */
    where: PrivateMessageLikeWhereUniqueInput
    /**
     * In case the PrivateMessageLike found by the `where` argument doesn't exist, create a new PrivateMessageLike with this data.
     */
    create: XOR<PrivateMessageLikeCreateInput, PrivateMessageLikeUncheckedCreateInput>
    /**
     * In case the PrivateMessageLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateMessageLikeUpdateInput, PrivateMessageLikeUncheckedUpdateInput>
  }

  /**
   * PrivateMessageLike delete
   */
  export type PrivateMessageLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
    /**
     * Filter which PrivateMessageLike to delete.
     */
    where: PrivateMessageLikeWhereUniqueInput
  }

  /**
   * PrivateMessageLike deleteMany
   */
  export type PrivateMessageLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateMessageLikes to delete
     */
    where?: PrivateMessageLikeWhereInput
    /**
     * Limit how many PrivateMessageLikes to delete.
     */
    limit?: number
  }

  /**
   * PrivateMessageLike without action
   */
  export type PrivateMessageLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateMessageLike
     */
    select?: PrivateMessageLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateMessageLike
     */
    omit?: PrivateMessageLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateMessageLikeInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPrivate: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isPrivate: number
    password: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type ChatRoomSumAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPrivate?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: number
    name: string
    description: string | null
    isPrivate: boolean
    password: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: number
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | ChatRoom$usersArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>



  export type ChatRoomSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isPrivate?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isPrivate" | "password" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | ChatRoom$usersArgs<ExtArgs>
    messages?: boolean | ChatRoom$messagesArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      users: Prisma.$UserChatRoomPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      isPrivate: boolean
      password: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: number
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends ChatRoom$usersArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends ChatRoom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'Int'>
    readonly name: FieldRef<"ChatRoom", 'String'>
    readonly description: FieldRef<"ChatRoom", 'String'>
    readonly isPrivate: FieldRef<"ChatRoom", 'Boolean'>
    readonly password: FieldRef<"ChatRoom", 'String'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly createdBy: FieldRef<"ChatRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.users
   */
  export type ChatRoom$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    where?: UserChatRoomWhereInput
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    cursor?: UserChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserChatRoomScalarFieldEnum | UserChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom.messages
   */
  export type ChatRoom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model UserChatRoom
   */

  export type AggregateUserChatRoom = {
    _count: UserChatRoomCountAggregateOutputType | null
    _avg: UserChatRoomAvgAggregateOutputType | null
    _sum: UserChatRoomSumAggregateOutputType | null
    _min: UserChatRoomMinAggregateOutputType | null
    _max: UserChatRoomMaxAggregateOutputType | null
  }

  export type UserChatRoomAvgAggregateOutputType = {
    userId: number | null
    chatRoomId: number | null
  }

  export type UserChatRoomSumAggregateOutputType = {
    userId: number | null
    chatRoomId: number | null
  }

  export type UserChatRoomMinAggregateOutputType = {
    userId: number | null
    chatRoomId: number | null
  }

  export type UserChatRoomMaxAggregateOutputType = {
    userId: number | null
    chatRoomId: number | null
  }

  export type UserChatRoomCountAggregateOutputType = {
    userId: number
    chatRoomId: number
    _all: number
  }


  export type UserChatRoomAvgAggregateInputType = {
    userId?: true
    chatRoomId?: true
  }

  export type UserChatRoomSumAggregateInputType = {
    userId?: true
    chatRoomId?: true
  }

  export type UserChatRoomMinAggregateInputType = {
    userId?: true
    chatRoomId?: true
  }

  export type UserChatRoomMaxAggregateInputType = {
    userId?: true
    chatRoomId?: true
  }

  export type UserChatRoomCountAggregateInputType = {
    userId?: true
    chatRoomId?: true
    _all?: true
  }

  export type UserChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChatRoom to aggregate.
     */
    where?: UserChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChatRooms to fetch.
     */
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserChatRooms
    **/
    _count?: true | UserChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserChatRoomMaxAggregateInputType
  }

  export type GetUserChatRoomAggregateType<T extends UserChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateUserChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserChatRoom[P]>
      : GetScalarType<T[P], AggregateUserChatRoom[P]>
  }




  export type UserChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserChatRoomWhereInput
    orderBy?: UserChatRoomOrderByWithAggregationInput | UserChatRoomOrderByWithAggregationInput[]
    by: UserChatRoomScalarFieldEnum[] | UserChatRoomScalarFieldEnum
    having?: UserChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserChatRoomCountAggregateInputType | true
    _avg?: UserChatRoomAvgAggregateInputType
    _sum?: UserChatRoomSumAggregateInputType
    _min?: UserChatRoomMinAggregateInputType
    _max?: UserChatRoomMaxAggregateInputType
  }

  export type UserChatRoomGroupByOutputType = {
    userId: number
    chatRoomId: number
    _count: UserChatRoomCountAggregateOutputType | null
    _avg: UserChatRoomAvgAggregateOutputType | null
    _sum: UserChatRoomSumAggregateOutputType | null
    _min: UserChatRoomMinAggregateOutputType | null
    _max: UserChatRoomMaxAggregateOutputType | null
  }

  type GetUserChatRoomGroupByPayload<T extends UserChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], UserChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type UserChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    chatRoomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userChatRoom"]>



  export type UserChatRoomSelectScalar = {
    userId?: boolean
    chatRoomId?: boolean
  }

  export type UserChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "chatRoomId", ExtArgs["result"]["userChatRoom"]>
  export type UserChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatRoom?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }

  export type $UserChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserChatRoom"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      chatRoomId: number
    }, ExtArgs["result"]["userChatRoom"]>
    composites: {}
  }

  type UserChatRoomGetPayload<S extends boolean | null | undefined | UserChatRoomDefaultArgs> = $Result.GetResult<Prisma.$UserChatRoomPayload, S>

  type UserChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserChatRoomCountAggregateInputType | true
    }

  export interface UserChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserChatRoom'], meta: { name: 'UserChatRoom' } }
    /**
     * Find zero or one UserChatRoom that matches the filter.
     * @param {UserChatRoomFindUniqueArgs} args - Arguments to find a UserChatRoom
     * @example
     * // Get one UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserChatRoomFindUniqueArgs>(args: SelectSubset<T, UserChatRoomFindUniqueArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserChatRoomFindUniqueOrThrowArgs} args - Arguments to find a UserChatRoom
     * @example
     * // Get one UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, UserChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomFindFirstArgs} args - Arguments to find a UserChatRoom
     * @example
     * // Get one UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserChatRoomFindFirstArgs>(args?: SelectSubset<T, UserChatRoomFindFirstArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomFindFirstOrThrowArgs} args - Arguments to find a UserChatRoom
     * @example
     * // Get one UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, UserChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserChatRooms
     * const userChatRooms = await prisma.userChatRoom.findMany()
     * 
     * // Get first 10 UserChatRooms
     * const userChatRooms = await prisma.userChatRoom.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userChatRoomWithUserIdOnly = await prisma.userChatRoom.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserChatRoomFindManyArgs>(args?: SelectSubset<T, UserChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserChatRoom.
     * @param {UserChatRoomCreateArgs} args - Arguments to create a UserChatRoom.
     * @example
     * // Create one UserChatRoom
     * const UserChatRoom = await prisma.userChatRoom.create({
     *   data: {
     *     // ... data to create a UserChatRoom
     *   }
     * })
     * 
     */
    create<T extends UserChatRoomCreateArgs>(args: SelectSubset<T, UserChatRoomCreateArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserChatRooms.
     * @param {UserChatRoomCreateManyArgs} args - Arguments to create many UserChatRooms.
     * @example
     * // Create many UserChatRooms
     * const userChatRoom = await prisma.userChatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserChatRoomCreateManyArgs>(args?: SelectSubset<T, UserChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserChatRoom.
     * @param {UserChatRoomDeleteArgs} args - Arguments to delete one UserChatRoom.
     * @example
     * // Delete one UserChatRoom
     * const UserChatRoom = await prisma.userChatRoom.delete({
     *   where: {
     *     // ... filter to delete one UserChatRoom
     *   }
     * })
     * 
     */
    delete<T extends UserChatRoomDeleteArgs>(args: SelectSubset<T, UserChatRoomDeleteArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserChatRoom.
     * @param {UserChatRoomUpdateArgs} args - Arguments to update one UserChatRoom.
     * @example
     * // Update one UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserChatRoomUpdateArgs>(args: SelectSubset<T, UserChatRoomUpdateArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserChatRooms.
     * @param {UserChatRoomDeleteManyArgs} args - Arguments to filter UserChatRooms to delete.
     * @example
     * // Delete a few UserChatRooms
     * const { count } = await prisma.userChatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserChatRoomDeleteManyArgs>(args?: SelectSubset<T, UserChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserChatRooms
     * const userChatRoom = await prisma.userChatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserChatRoomUpdateManyArgs>(args: SelectSubset<T, UserChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserChatRoom.
     * @param {UserChatRoomUpsertArgs} args - Arguments to update or create a UserChatRoom.
     * @example
     * // Update or create a UserChatRoom
     * const userChatRoom = await prisma.userChatRoom.upsert({
     *   create: {
     *     // ... data to create a UserChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends UserChatRoomUpsertArgs>(args: SelectSubset<T, UserChatRoomUpsertArgs<ExtArgs>>): Prisma__UserChatRoomClient<$Result.GetResult<Prisma.$UserChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomCountArgs} args - Arguments to filter UserChatRooms to count.
     * @example
     * // Count the number of UserChatRooms
     * const count = await prisma.userChatRoom.count({
     *   where: {
     *     // ... the filter for the UserChatRooms we want to count
     *   }
     * })
    **/
    count<T extends UserChatRoomCountArgs>(
      args?: Subset<T, UserChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserChatRoomAggregateArgs>(args: Subset<T, UserChatRoomAggregateArgs>): Prisma.PrismaPromise<GetUserChatRoomAggregateType<T>>

    /**
     * Group by UserChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: UserChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserChatRoom model
   */
  readonly fields: UserChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatRoom<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserChatRoom model
   */
  interface UserChatRoomFieldRefs {
    readonly userId: FieldRef<"UserChatRoom", 'Int'>
    readonly chatRoomId: FieldRef<"UserChatRoom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserChatRoom findUnique
   */
  export type UserChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which UserChatRoom to fetch.
     */
    where: UserChatRoomWhereUniqueInput
  }

  /**
   * UserChatRoom findUniqueOrThrow
   */
  export type UserChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which UserChatRoom to fetch.
     */
    where: UserChatRoomWhereUniqueInput
  }

  /**
   * UserChatRoom findFirst
   */
  export type UserChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which UserChatRoom to fetch.
     */
    where?: UserChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChatRooms to fetch.
     */
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChatRooms.
     */
    cursor?: UserChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChatRooms.
     */
    distinct?: UserChatRoomScalarFieldEnum | UserChatRoomScalarFieldEnum[]
  }

  /**
   * UserChatRoom findFirstOrThrow
   */
  export type UserChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which UserChatRoom to fetch.
     */
    where?: UserChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChatRooms to fetch.
     */
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserChatRooms.
     */
    cursor?: UserChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserChatRooms.
     */
    distinct?: UserChatRoomScalarFieldEnum | UserChatRoomScalarFieldEnum[]
  }

  /**
   * UserChatRoom findMany
   */
  export type UserChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which UserChatRooms to fetch.
     */
    where?: UserChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserChatRooms to fetch.
     */
    orderBy?: UserChatRoomOrderByWithRelationInput | UserChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserChatRooms.
     */
    cursor?: UserChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserChatRooms.
     */
    skip?: number
    distinct?: UserChatRoomScalarFieldEnum | UserChatRoomScalarFieldEnum[]
  }

  /**
   * UserChatRoom create
   */
  export type UserChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a UserChatRoom.
     */
    data: XOR<UserChatRoomCreateInput, UserChatRoomUncheckedCreateInput>
  }

  /**
   * UserChatRoom createMany
   */
  export type UserChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserChatRooms.
     */
    data: UserChatRoomCreateManyInput | UserChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserChatRoom update
   */
  export type UserChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a UserChatRoom.
     */
    data: XOR<UserChatRoomUpdateInput, UserChatRoomUncheckedUpdateInput>
    /**
     * Choose, which UserChatRoom to update.
     */
    where: UserChatRoomWhereUniqueInput
  }

  /**
   * UserChatRoom updateMany
   */
  export type UserChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserChatRooms.
     */
    data: XOR<UserChatRoomUpdateManyMutationInput, UserChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which UserChatRooms to update
     */
    where?: UserChatRoomWhereInput
    /**
     * Limit how many UserChatRooms to update.
     */
    limit?: number
  }

  /**
   * UserChatRoom upsert
   */
  export type UserChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the UserChatRoom to update in case it exists.
     */
    where: UserChatRoomWhereUniqueInput
    /**
     * In case the UserChatRoom found by the `where` argument doesn't exist, create a new UserChatRoom with this data.
     */
    create: XOR<UserChatRoomCreateInput, UserChatRoomUncheckedCreateInput>
    /**
     * In case the UserChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserChatRoomUpdateInput, UserChatRoomUncheckedUpdateInput>
  }

  /**
   * UserChatRoom delete
   */
  export type UserChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
    /**
     * Filter which UserChatRoom to delete.
     */
    where: UserChatRoomWhereUniqueInput
  }

  /**
   * UserChatRoom deleteMany
   */
  export type UserChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserChatRooms to delete
     */
    where?: UserChatRoomWhereInput
    /**
     * Limit how many UserChatRooms to delete.
     */
    limit?: number
  }

  /**
   * UserChatRoom without action
   */
  export type UserChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserChatRoom
     */
    select?: UserChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserChatRoom
     */
    omit?: UserChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model Friend
   */

  export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  export type FriendAvgAggregateOutputType = {
    userId: number | null
    friendId: number | null
  }

  export type FriendSumAggregateOutputType = {
    userId: number | null
    friendId: number | null
  }

  export type FriendMinAggregateOutputType = {
    userId: number | null
    friendId: number | null
  }

  export type FriendMaxAggregateOutputType = {
    userId: number | null
    friendId: number | null
  }

  export type FriendCountAggregateOutputType = {
    userId: number
    friendId: number
    _all: number
  }


  export type FriendAvgAggregateInputType = {
    userId?: true
    friendId?: true
  }

  export type FriendSumAggregateInputType = {
    userId?: true
    friendId?: true
  }

  export type FriendMinAggregateInputType = {
    userId?: true
    friendId?: true
  }

  export type FriendMaxAggregateInputType = {
    userId?: true
    friendId?: true
  }

  export type FriendCountAggregateInputType = {
    userId?: true
    friendId?: true
    _all?: true
  }

  export type FriendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friend to aggregate.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friends
    **/
    _count?: true | FriendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendMaxAggregateInputType
  }

  export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
        [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriend[P]>
      : GetScalarType<T[P], AggregateFriend[P]>
  }




  export type FriendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendWhereInput
    orderBy?: FriendOrderByWithAggregationInput | FriendOrderByWithAggregationInput[]
    by: FriendScalarFieldEnum[] | FriendScalarFieldEnum
    having?: FriendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendCountAggregateInputType | true
    _avg?: FriendAvgAggregateInputType
    _sum?: FriendSumAggregateInputType
    _min?: FriendMinAggregateInputType
    _max?: FriendMaxAggregateInputType
  }

  export type FriendGroupByOutputType = {
    userId: number
    friendId: number
    _count: FriendCountAggregateOutputType | null
    _avg: FriendAvgAggregateOutputType | null
    _sum: FriendSumAggregateOutputType | null
    _min: FriendMinAggregateOutputType | null
    _max: FriendMaxAggregateOutputType | null
  }

  type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendGroupByOutputType[P]>
            : GetScalarType<T[P], FriendGroupByOutputType[P]>
        }
      >
    >


  export type FriendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    friendId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friend"]>



  export type FriendSelectScalar = {
    userId?: boolean
    friendId?: boolean
  }

  export type FriendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "friendId", ExtArgs["result"]["friend"]>
  export type FriendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friend"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      friendId: number
    }, ExtArgs["result"]["friend"]>
    composites: {}
  }

  type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = $Result.GetResult<Prisma.$FriendPayload, S>

  type FriendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendCountAggregateInputType | true
    }

  export interface FriendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friend'], meta: { name: 'Friend' } }
    /**
     * Find zero or one Friend that matches the filter.
     * @param {FriendFindUniqueArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendFindUniqueArgs>(args: SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendFindUniqueOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendFindFirstArgs>(args?: SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindFirstOrThrowArgs} args - Arguments to find a Friend
     * @example
     * // Get one Friend
     * const friend = await prisma.friend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friends
     * const friends = await prisma.friend.findMany()
     * 
     * // Get first 10 Friends
     * const friends = await prisma.friend.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const friendWithUserIdOnly = await prisma.friend.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends FriendFindManyArgs>(args?: SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friend.
     * @param {FriendCreateArgs} args - Arguments to create a Friend.
     * @example
     * // Create one Friend
     * const Friend = await prisma.friend.create({
     *   data: {
     *     // ... data to create a Friend
     *   }
     * })
     * 
     */
    create<T extends FriendCreateArgs>(args: SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friends.
     * @param {FriendCreateManyArgs} args - Arguments to create many Friends.
     * @example
     * // Create many Friends
     * const friend = await prisma.friend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendCreateManyArgs>(args?: SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Friend.
     * @param {FriendDeleteArgs} args - Arguments to delete one Friend.
     * @example
     * // Delete one Friend
     * const Friend = await prisma.friend.delete({
     *   where: {
     *     // ... filter to delete one Friend
     *   }
     * })
     * 
     */
    delete<T extends FriendDeleteArgs>(args: SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friend.
     * @param {FriendUpdateArgs} args - Arguments to update one Friend.
     * @example
     * // Update one Friend
     * const friend = await prisma.friend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendUpdateArgs>(args: SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friends.
     * @param {FriendDeleteManyArgs} args - Arguments to filter Friends to delete.
     * @example
     * // Delete a few Friends
     * const { count } = await prisma.friend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendDeleteManyArgs>(args?: SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friends
     * const friend = await prisma.friend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendUpdateManyArgs>(args: SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Friend.
     * @param {FriendUpsertArgs} args - Arguments to update or create a Friend.
     * @example
     * // Update or create a Friend
     * const friend = await prisma.friend.upsert({
     *   create: {
     *     // ... data to create a Friend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friend we want to update
     *   }
     * })
     */
    upsert<T extends FriendUpsertArgs>(args: SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma__FriendClient<$Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendCountArgs} args - Arguments to filter Friends to count.
     * @example
     * // Count the number of Friends
     * const count = await prisma.friend.count({
     *   where: {
     *     // ... the filter for the Friends we want to count
     *   }
     * })
    **/
    count<T extends FriendCountArgs>(
      args?: Subset<T, FriendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendAggregateArgs>(args: Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>

    /**
     * Group by Friend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendGroupByArgs['orderBy'] }
        : { orderBy?: FriendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friend model
   */
  readonly fields: FriendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Friend model
   */
  interface FriendFieldRefs {
    readonly userId: FieldRef<"Friend", 'Int'>
    readonly friendId: FieldRef<"Friend", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Friend findUnique
   */
  export type FriendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findUniqueOrThrow
   */
  export type FriendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend findFirst
   */
  export type FriendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findFirstOrThrow
   */
  export type FriendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friend to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friends.
     */
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend findMany
   */
  export type FriendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter, which Friends to fetch.
     */
    where?: FriendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friends to fetch.
     */
    orderBy?: FriendOrderByWithRelationInput | FriendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friends.
     */
    cursor?: FriendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friends.
     */
    skip?: number
    distinct?: FriendScalarFieldEnum | FriendScalarFieldEnum[]
  }

  /**
   * Friend create
   */
  export type FriendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to create a Friend.
     */
    data: XOR<FriendCreateInput, FriendUncheckedCreateInput>
  }

  /**
   * Friend createMany
   */
  export type FriendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friends.
     */
    data: FriendCreateManyInput | FriendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friend update
   */
  export type FriendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The data needed to update a Friend.
     */
    data: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
    /**
     * Choose, which Friend to update.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend updateMany
   */
  export type FriendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friends.
     */
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyInput>
    /**
     * Filter which Friends to update
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to update.
     */
    limit?: number
  }

  /**
   * Friend upsert
   */
  export type FriendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * The filter to search for the Friend to update in case it exists.
     */
    where: FriendWhereUniqueInput
    /**
     * In case the Friend found by the `where` argument doesn't exist, create a new Friend with this data.
     */
    create: XOR<FriendCreateInput, FriendUncheckedCreateInput>
    /**
     * In case the Friend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendUpdateInput, FriendUncheckedUpdateInput>
  }

  /**
   * Friend delete
   */
  export type FriendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
    /**
     * Filter which Friend to delete.
     */
    where: FriendWhereUniqueInput
  }

  /**
   * Friend deleteMany
   */
  export type FriendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friends to delete
     */
    where?: FriendWhereInput
    /**
     * Limit how many Friends to delete.
     */
    limit?: number
  }

  /**
   * Friend without action
   */
  export type FriendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friend
     */
    select?: FriendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friend
     */
    omit?: FriendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendInclude<ExtArgs> | null
  }


  /**
   * Model FriendRequest
   */

  export type AggregateFriendRequest = {
    _count: FriendRequestCountAggregateOutputType | null
    _avg: FriendRequestAvgAggregateOutputType | null
    _sum: FriendRequestSumAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  export type FriendRequestAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendRequestSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type FriendRequestMinAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendRequestMaxAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
    status: string | null
    createdAt: Date | null
  }

  export type FriendRequestCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    createdAt: number
    _all: number
  }


  export type FriendRequestAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendRequestSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type FriendRequestMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type FriendRequestMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
  }

  export type FriendRequestCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FriendRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequest to aggregate.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FriendRequests
    **/
    _count?: true | FriendRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendRequestMaxAggregateInputType
  }

  export type GetFriendRequestAggregateType<T extends FriendRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendRequest[P]>
      : GetScalarType<T[P], AggregateFriendRequest[P]>
  }




  export type FriendRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendRequestWhereInput
    orderBy?: FriendRequestOrderByWithAggregationInput | FriendRequestOrderByWithAggregationInput[]
    by: FriendRequestScalarFieldEnum[] | FriendRequestScalarFieldEnum
    having?: FriendRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendRequestCountAggregateInputType | true
    _avg?: FriendRequestAvgAggregateInputType
    _sum?: FriendRequestSumAggregateInputType
    _min?: FriendRequestMinAggregateInputType
    _max?: FriendRequestMaxAggregateInputType
  }

  export type FriendRequestGroupByOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: string
    createdAt: Date
    _count: FriendRequestCountAggregateOutputType | null
    _avg: FriendRequestAvgAggregateOutputType | null
    _sum: FriendRequestSumAggregateOutputType | null
    _min: FriendRequestMinAggregateOutputType | null
    _max: FriendRequestMaxAggregateOutputType | null
  }

  type GetFriendRequestGroupByPayload<T extends FriendRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FriendRequestGroupByOutputType[P]>
        }
      >
    >


  export type FriendRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendRequest"]>



  export type FriendRequestSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type FriendRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "createdAt", ExtArgs["result"]["friendRequest"]>
  export type FriendRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FriendRequest"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      senderId: number
      receiverId: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["friendRequest"]>
    composites: {}
  }

  type FriendRequestGetPayload<S extends boolean | null | undefined | FriendRequestDefaultArgs> = $Result.GetResult<Prisma.$FriendRequestPayload, S>

  type FriendRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendRequestCountAggregateInputType | true
    }

  export interface FriendRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FriendRequest'], meta: { name: 'FriendRequest' } }
    /**
     * Find zero or one FriendRequest that matches the filter.
     * @param {FriendRequestFindUniqueArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendRequestFindUniqueArgs>(args: SelectSubset<T, FriendRequestFindUniqueArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FriendRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendRequestFindUniqueOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendRequestFindFirstArgs>(args?: SelectSubset<T, FriendRequestFindFirstArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FriendRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindFirstOrThrowArgs} args - Arguments to find a FriendRequest
     * @example
     * // Get one FriendRequest
     * const friendRequest = await prisma.friendRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FriendRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany()
     * 
     * // Get first 10 FriendRequests
     * const friendRequests = await prisma.friendRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendRequestWithIdOnly = await prisma.friendRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendRequestFindManyArgs>(args?: SelectSubset<T, FriendRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FriendRequest.
     * @param {FriendRequestCreateArgs} args - Arguments to create a FriendRequest.
     * @example
     * // Create one FriendRequest
     * const FriendRequest = await prisma.friendRequest.create({
     *   data: {
     *     // ... data to create a FriendRequest
     *   }
     * })
     * 
     */
    create<T extends FriendRequestCreateArgs>(args: SelectSubset<T, FriendRequestCreateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FriendRequests.
     * @param {FriendRequestCreateManyArgs} args - Arguments to create many FriendRequests.
     * @example
     * // Create many FriendRequests
     * const friendRequest = await prisma.friendRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendRequestCreateManyArgs>(args?: SelectSubset<T, FriendRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FriendRequest.
     * @param {FriendRequestDeleteArgs} args - Arguments to delete one FriendRequest.
     * @example
     * // Delete one FriendRequest
     * const FriendRequest = await prisma.friendRequest.delete({
     *   where: {
     *     // ... filter to delete one FriendRequest
     *   }
     * })
     * 
     */
    delete<T extends FriendRequestDeleteArgs>(args: SelectSubset<T, FriendRequestDeleteArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FriendRequest.
     * @param {FriendRequestUpdateArgs} args - Arguments to update one FriendRequest.
     * @example
     * // Update one FriendRequest
     * const friendRequest = await prisma.friendRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendRequestUpdateArgs>(args: SelectSubset<T, FriendRequestUpdateArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FriendRequests.
     * @param {FriendRequestDeleteManyArgs} args - Arguments to filter FriendRequests to delete.
     * @example
     * // Delete a few FriendRequests
     * const { count } = await prisma.friendRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendRequestDeleteManyArgs>(args?: SelectSubset<T, FriendRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FriendRequests
     * const friendRequest = await prisma.friendRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendRequestUpdateManyArgs>(args: SelectSubset<T, FriendRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FriendRequest.
     * @param {FriendRequestUpsertArgs} args - Arguments to update or create a FriendRequest.
     * @example
     * // Update or create a FriendRequest
     * const friendRequest = await prisma.friendRequest.upsert({
     *   create: {
     *     // ... data to create a FriendRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FriendRequest we want to update
     *   }
     * })
     */
    upsert<T extends FriendRequestUpsertArgs>(args: SelectSubset<T, FriendRequestUpsertArgs<ExtArgs>>): Prisma__FriendRequestClient<$Result.GetResult<Prisma.$FriendRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FriendRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestCountArgs} args - Arguments to filter FriendRequests to count.
     * @example
     * // Count the number of FriendRequests
     * const count = await prisma.friendRequest.count({
     *   where: {
     *     // ... the filter for the FriendRequests we want to count
     *   }
     * })
    **/
    count<T extends FriendRequestCountArgs>(
      args?: Subset<T, FriendRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FriendRequestAggregateArgs>(args: Subset<T, FriendRequestAggregateArgs>): Prisma.PrismaPromise<GetFriendRequestAggregateType<T>>

    /**
     * Group by FriendRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FriendRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendRequestGroupByArgs['orderBy'] }
        : { orderBy?: FriendRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FriendRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FriendRequest model
   */
  readonly fields: FriendRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FriendRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FriendRequest model
   */
  interface FriendRequestFieldRefs {
    readonly id: FieldRef<"FriendRequest", 'Int'>
    readonly senderId: FieldRef<"FriendRequest", 'Int'>
    readonly receiverId: FieldRef<"FriendRequest", 'Int'>
    readonly status: FieldRef<"FriendRequest", 'String'>
    readonly createdAt: FieldRef<"FriendRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FriendRequest findUnique
   */
  export type FriendRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findUniqueOrThrow
   */
  export type FriendRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest findFirst
   */
  export type FriendRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findFirstOrThrow
   */
  export type FriendRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequest to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FriendRequests.
     */
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest findMany
   */
  export type FriendRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter, which FriendRequests to fetch.
     */
    where?: FriendRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FriendRequests to fetch.
     */
    orderBy?: FriendRequestOrderByWithRelationInput | FriendRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FriendRequests.
     */
    cursor?: FriendRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FriendRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FriendRequests.
     */
    skip?: number
    distinct?: FriendRequestScalarFieldEnum | FriendRequestScalarFieldEnum[]
  }

  /**
   * FriendRequest create
   */
  export type FriendRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FriendRequest.
     */
    data: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
  }

  /**
   * FriendRequest createMany
   */
  export type FriendRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FriendRequests.
     */
    data: FriendRequestCreateManyInput | FriendRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FriendRequest update
   */
  export type FriendRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FriendRequest.
     */
    data: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
    /**
     * Choose, which FriendRequest to update.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest updateMany
   */
  export type FriendRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FriendRequests.
     */
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyInput>
    /**
     * Filter which FriendRequests to update
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to update.
     */
    limit?: number
  }

  /**
   * FriendRequest upsert
   */
  export type FriendRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FriendRequest to update in case it exists.
     */
    where: FriendRequestWhereUniqueInput
    /**
     * In case the FriendRequest found by the `where` argument doesn't exist, create a new FriendRequest with this data.
     */
    create: XOR<FriendRequestCreateInput, FriendRequestUncheckedCreateInput>
    /**
     * In case the FriendRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendRequestUpdateInput, FriendRequestUncheckedUpdateInput>
  }

  /**
   * FriendRequest delete
   */
  export type FriendRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
    /**
     * Filter which FriendRequest to delete.
     */
    where: FriendRequestWhereUniqueInput
  }

  /**
   * FriendRequest deleteMany
   */
  export type FriendRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FriendRequests to delete
     */
    where?: FriendRequestWhereInput
    /**
     * Limit how many FriendRequests to delete.
     */
    limit?: number
  }

  /**
   * FriendRequest without action
   */
  export type FriendRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FriendRequest
     */
    select?: FriendRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FriendRequest
     */
    omit?: FriendRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    password: 'password',
    username: 'username',
    bio: 'bio',
    profileImage: 'profileImage',
    notification: 'notification',
    role: 'role',
    sex: 'sex'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PushSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    endpointHash: 'endpointHash',
    p256dh: 'p256dh',
    auth: 'auth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PushSubscriptionScalarFieldEnum = (typeof PushSubscriptionScalarFieldEnum)[keyof typeof PushSubscriptionScalarFieldEnum]


  export const AdminBlockScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    adminId: 'adminId',
    reason: 'reason',
    duration: 'duration',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminBlockScalarFieldEnum = (typeof AdminBlockScalarFieldEnum)[keyof typeof AdminBlockScalarFieldEnum]


  export const BlockedUserScalarFieldEnum: {
    id: 'id',
    blockerId: 'blockerId',
    blockedId: 'blockedId'
  };

  export type BlockedUserScalarFieldEnum = (typeof BlockedUserScalarFieldEnum)[keyof typeof BlockedUserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    chatRoomId: 'chatRoomId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageLikeScalarFieldEnum: {
    messageId: 'messageId',
    userId: 'userId'
  };

  export type MessageLikeScalarFieldEnum = (typeof MessageLikeScalarFieldEnum)[keyof typeof MessageLikeScalarFieldEnum]


  export const PrivateMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    receiverId: 'receiverId',
    isRead: 'isRead'
  };

  export type PrivateMessageScalarFieldEnum = (typeof PrivateMessageScalarFieldEnum)[keyof typeof PrivateMessageScalarFieldEnum]


  export const PrivateMessageLikeScalarFieldEnum: {
    privateMessageId: 'privateMessageId',
    userId: 'userId'
  };

  export type PrivateMessageLikeScalarFieldEnum = (typeof PrivateMessageLikeScalarFieldEnum)[keyof typeof PrivateMessageLikeScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isPrivate: 'isPrivate',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const UserChatRoomScalarFieldEnum: {
    userId: 'userId',
    chatRoomId: 'chatRoomId'
  };

  export type UserChatRoomScalarFieldEnum = (typeof UserChatRoomScalarFieldEnum)[keyof typeof UserChatRoomScalarFieldEnum]


  export const FriendScalarFieldEnum: {
    userId: 'userId',
    friendId: 'friendId'
  };

  export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum]


  export const FriendRequestScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FriendRequestScalarFieldEnum = (typeof FriendRequestScalarFieldEnum)[keyof typeof FriendRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const OtpOrderByRelevanceFieldEnum: {
    email: 'email',
    otp: 'otp'
  };

  export type OtpOrderByRelevanceFieldEnum = (typeof OtpOrderByRelevanceFieldEnum)[keyof typeof OtpOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    username: 'username',
    bio: 'bio',
    profileImage: 'profileImage',
    notification: 'notification'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PushSubscriptionOrderByRelevanceFieldEnum: {
    endpoint: 'endpoint',
    endpointHash: 'endpointHash',
    p256dh: 'p256dh',
    auth: 'auth'
  };

  export type PushSubscriptionOrderByRelevanceFieldEnum = (typeof PushSubscriptionOrderByRelevanceFieldEnum)[keyof typeof PushSubscriptionOrderByRelevanceFieldEnum]


  export const AdminBlockOrderByRelevanceFieldEnum: {
    reason: 'reason',
    duration: 'duration'
  };

  export type AdminBlockOrderByRelevanceFieldEnum = (typeof AdminBlockOrderByRelevanceFieldEnum)[keyof typeof AdminBlockOrderByRelevanceFieldEnum]


  export const MessageOrderByRelevanceFieldEnum: {
    message: 'message',
    image: 'image'
  };

  export type MessageOrderByRelevanceFieldEnum = (typeof MessageOrderByRelevanceFieldEnum)[keyof typeof MessageOrderByRelevanceFieldEnum]


  export const PrivateMessageOrderByRelevanceFieldEnum: {
    message: 'message',
    image: 'image'
  };

  export type PrivateMessageOrderByRelevanceFieldEnum = (typeof PrivateMessageOrderByRelevanceFieldEnum)[keyof typeof PrivateMessageOrderByRelevanceFieldEnum]


  export const ChatRoomOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    password: 'password'
  };

  export type ChatRoomOrderByRelevanceFieldEnum = (typeof ChatRoomOrderByRelevanceFieldEnum)[keyof typeof ChatRoomOrderByRelevanceFieldEnum]


  export const FriendRequestOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type FriendRequestOrderByRelevanceFieldEnum = (typeof FriendRequestOrderByRelevanceFieldEnum)[keyof typeof FriendRequestOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _relevance?: OtpOrderByRelevanceInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otp?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id" | "email">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    email?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringFilter<"User"> | string
    notification?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    pushSubscriptions?: PushSubscriptionListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
    blockedBy?: BlockedUserListRelationFilter
    adminBlocks?: AdminBlockListRelationFilter
    blocksAdministered?: AdminBlockListRelationFilter
    chatRooms?: UserChatRoomListRelationFilter
    friends?: FriendListRelationFilter
    friendOf?: FriendListRelationFilter
    createdChatRooms?: ChatRoomListRelationFilter
    messages?: MessageListRelationFilter
    likedMessages?: MessageLikeListRelationFilter
    sentFriendRequests?: FriendRequestListRelationFilter
    receivedFriendRequests?: FriendRequestListRelationFilter
    sentMessages?: PrivateMessageListRelationFilter
    receivedMessages?: PrivateMessageListRelationFilter
    likedPrivateMessages?: PrivateMessageLikeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrder
    notification?: SortOrder
    role?: SortOrder
    sex?: SortOrder
    pushSubscriptions?: PushSubscriptionOrderByRelationAggregateInput
    blockedUsers?: BlockedUserOrderByRelationAggregateInput
    blockedBy?: BlockedUserOrderByRelationAggregateInput
    adminBlocks?: AdminBlockOrderByRelationAggregateInput
    blocksAdministered?: AdminBlockOrderByRelationAggregateInput
    chatRooms?: UserChatRoomOrderByRelationAggregateInput
    friends?: FriendOrderByRelationAggregateInput
    friendOf?: FriendOrderByRelationAggregateInput
    createdChatRooms?: ChatRoomOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    likedMessages?: MessageLikeOrderByRelationAggregateInput
    sentFriendRequests?: FriendRequestOrderByRelationAggregateInput
    receivedFriendRequests?: FriendRequestOrderByRelationAggregateInput
    sentMessages?: PrivateMessageOrderByRelationAggregateInput
    receivedMessages?: PrivateMessageOrderByRelationAggregateInput
    likedPrivateMessages?: PrivateMessageLikeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profileImage?: StringFilter<"User"> | string
    notification?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    sex?: EnumSexFilter<"User"> | $Enums.Sex
    pushSubscriptions?: PushSubscriptionListRelationFilter
    blockedUsers?: BlockedUserListRelationFilter
    blockedBy?: BlockedUserListRelationFilter
    adminBlocks?: AdminBlockListRelationFilter
    blocksAdministered?: AdminBlockListRelationFilter
    chatRooms?: UserChatRoomListRelationFilter
    friends?: FriendListRelationFilter
    friendOf?: FriendListRelationFilter
    createdChatRooms?: ChatRoomListRelationFilter
    messages?: MessageListRelationFilter
    likedMessages?: MessageLikeListRelationFilter
    sentFriendRequests?: FriendRequestListRelationFilter
    receivedFriendRequests?: FriendRequestListRelationFilter
    sentMessages?: PrivateMessageListRelationFilter
    receivedMessages?: PrivateMessageListRelationFilter
    likedPrivateMessages?: PrivateMessageLikeListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    profileImage?: SortOrder
    notification?: SortOrder
    role?: SortOrder
    sex?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileImage?: StringWithAggregatesFilter<"User"> | string
    notification?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    sex?: EnumSexWithAggregatesFilter<"User"> | $Enums.Sex
  }

  export type PushSubscriptionWhereInput = {
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    id?: IntFilter<"PushSubscription"> | number
    userId?: IntFilter<"PushSubscription"> | number
    endpoint?: StringFilter<"PushSubscription"> | string
    endpointHash?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PushSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    endpointHash?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PushSubscriptionOrderByRelevanceInput
  }

  export type PushSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_endpointHash?: PushSubscriptionUserIdEndpointHashCompoundUniqueInput
    AND?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    OR?: PushSubscriptionWhereInput[]
    NOT?: PushSubscriptionWhereInput | PushSubscriptionWhereInput[]
    userId?: IntFilter<"PushSubscription"> | number
    endpoint?: StringFilter<"PushSubscription"> | string
    endpointHash?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_endpointHash">

  export type PushSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    endpointHash?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PushSubscriptionCountOrderByAggregateInput
    _avg?: PushSubscriptionAvgOrderByAggregateInput
    _max?: PushSubscriptionMaxOrderByAggregateInput
    _min?: PushSubscriptionMinOrderByAggregateInput
    _sum?: PushSubscriptionSumOrderByAggregateInput
  }

  export type PushSubscriptionScalarWhereWithAggregatesInput = {
    AND?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    OR?: PushSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: PushSubscriptionScalarWhereWithAggregatesInput | PushSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PushSubscription"> | number
    userId?: IntWithAggregatesFilter<"PushSubscription"> | number
    endpoint?: StringWithAggregatesFilter<"PushSubscription"> | string
    endpointHash?: StringWithAggregatesFilter<"PushSubscription"> | string
    p256dh?: StringWithAggregatesFilter<"PushSubscription"> | string
    auth?: StringWithAggregatesFilter<"PushSubscription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PushSubscription"> | Date | string
  }

  export type AdminBlockWhereInput = {
    AND?: AdminBlockWhereInput | AdminBlockWhereInput[]
    OR?: AdminBlockWhereInput[]
    NOT?: AdminBlockWhereInput | AdminBlockWhereInput[]
    id?: IntFilter<"AdminBlock"> | number
    userId?: IntFilter<"AdminBlock"> | number
    adminId?: IntFilter<"AdminBlock"> | number
    reason?: StringFilter<"AdminBlock"> | string
    duration?: StringFilter<"AdminBlock"> | string
    isActive?: BoolFilter<"AdminBlock"> | boolean
    startDate?: DateTimeFilter<"AdminBlock"> | Date | string
    endDate?: DateTimeNullableFilter<"AdminBlock"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminBlock"> | Date | string
    updatedAt?: DateTimeFilter<"AdminBlock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminBlockOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    reason?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
    _relevance?: AdminBlockOrderByRelevanceInput
  }

  export type AdminBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminBlockWhereInput | AdminBlockWhereInput[]
    OR?: AdminBlockWhereInput[]
    NOT?: AdminBlockWhereInput | AdminBlockWhereInput[]
    userId?: IntFilter<"AdminBlock"> | number
    adminId?: IntFilter<"AdminBlock"> | number
    reason?: StringFilter<"AdminBlock"> | string
    duration?: StringFilter<"AdminBlock"> | string
    isActive?: BoolFilter<"AdminBlock"> | boolean
    startDate?: DateTimeFilter<"AdminBlock"> | Date | string
    endDate?: DateTimeNullableFilter<"AdminBlock"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminBlock"> | Date | string
    updatedAt?: DateTimeFilter<"AdminBlock"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdminBlockOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    reason?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminBlockCountOrderByAggregateInput
    _avg?: AdminBlockAvgOrderByAggregateInput
    _max?: AdminBlockMaxOrderByAggregateInput
    _min?: AdminBlockMinOrderByAggregateInput
    _sum?: AdminBlockSumOrderByAggregateInput
  }

  export type AdminBlockScalarWhereWithAggregatesInput = {
    AND?: AdminBlockScalarWhereWithAggregatesInput | AdminBlockScalarWhereWithAggregatesInput[]
    OR?: AdminBlockScalarWhereWithAggregatesInput[]
    NOT?: AdminBlockScalarWhereWithAggregatesInput | AdminBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminBlock"> | number
    userId?: IntWithAggregatesFilter<"AdminBlock"> | number
    adminId?: IntWithAggregatesFilter<"AdminBlock"> | number
    reason?: StringWithAggregatesFilter<"AdminBlock"> | string
    duration?: StringWithAggregatesFilter<"AdminBlock"> | string
    isActive?: BoolWithAggregatesFilter<"AdminBlock"> | boolean
    startDate?: DateTimeWithAggregatesFilter<"AdminBlock"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"AdminBlock"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminBlock"> | Date | string
  }

  export type BlockedUserWhereInput = {
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    id?: IntFilter<"BlockedUser"> | number
    blockerId?: IntFilter<"BlockedUser"> | number
    blockedId?: IntFilter<"BlockedUser"> | number
    blocker?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocked?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BlockedUserOrderByWithRelationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    blocker?: UserOrderByWithRelationInput
    blocked?: UserOrderByWithRelationInput
  }

  export type BlockedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    blockerId_blockedId?: BlockedUserBlockerIdBlockedIdCompoundUniqueInput
    AND?: BlockedUserWhereInput | BlockedUserWhereInput[]
    OR?: BlockedUserWhereInput[]
    NOT?: BlockedUserWhereInput | BlockedUserWhereInput[]
    blockerId?: IntFilter<"BlockedUser"> | number
    blockedId?: IntFilter<"BlockedUser"> | number
    blocker?: XOR<UserScalarRelationFilter, UserWhereInput>
    blocked?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "blockerId_blockedId">

  export type BlockedUserOrderByWithAggregationInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
    _count?: BlockedUserCountOrderByAggregateInput
    _avg?: BlockedUserAvgOrderByAggregateInput
    _max?: BlockedUserMaxOrderByAggregateInput
    _min?: BlockedUserMinOrderByAggregateInput
    _sum?: BlockedUserSumOrderByAggregateInput
  }

  export type BlockedUserScalarWhereWithAggregatesInput = {
    AND?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    OR?: BlockedUserScalarWhereWithAggregatesInput[]
    NOT?: BlockedUserScalarWhereWithAggregatesInput | BlockedUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockedUser"> | number
    blockerId?: IntWithAggregatesFilter<"BlockedUser"> | number
    blockedId?: IntWithAggregatesFilter<"BlockedUser"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: IntFilter<"Message"> | number
    chatRoomId?: IntFilter<"Message"> | number
    likes?: MessageLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
    likes?: MessageLikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    chatRoom?: ChatRoomOrderByWithRelationInput
    _relevance?: MessageOrderByRelevanceInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: IntFilter<"Message"> | number
    chatRoomId?: IntFilter<"Message"> | number
    likes?: MessageLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    message?: StringWithAggregatesFilter<"Message"> | string
    image?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    userId?: IntWithAggregatesFilter<"Message"> | number
    chatRoomId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type MessageLikeWhereInput = {
    AND?: MessageLikeWhereInput | MessageLikeWhereInput[]
    OR?: MessageLikeWhereInput[]
    NOT?: MessageLikeWhereInput | MessageLikeWhereInput[]
    messageId?: IntFilter<"MessageLike"> | number
    userId?: IntFilter<"MessageLike"> | number
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageLikeOrderByWithRelationInput = {
    messageId?: SortOrder
    userId?: SortOrder
    message?: MessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageLikeWhereUniqueInput = Prisma.AtLeast<{
    messageId_userId?: MessageLikeMessageIdUserIdCompoundUniqueInput
    AND?: MessageLikeWhereInput | MessageLikeWhereInput[]
    OR?: MessageLikeWhereInput[]
    NOT?: MessageLikeWhereInput | MessageLikeWhereInput[]
    messageId?: IntFilter<"MessageLike"> | number
    userId?: IntFilter<"MessageLike"> | number
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "messageId_userId">

  export type MessageLikeOrderByWithAggregationInput = {
    messageId?: SortOrder
    userId?: SortOrder
    _count?: MessageLikeCountOrderByAggregateInput
    _avg?: MessageLikeAvgOrderByAggregateInput
    _max?: MessageLikeMaxOrderByAggregateInput
    _min?: MessageLikeMinOrderByAggregateInput
    _sum?: MessageLikeSumOrderByAggregateInput
  }

  export type MessageLikeScalarWhereWithAggregatesInput = {
    AND?: MessageLikeScalarWhereWithAggregatesInput | MessageLikeScalarWhereWithAggregatesInput[]
    OR?: MessageLikeScalarWhereWithAggregatesInput[]
    NOT?: MessageLikeScalarWhereWithAggregatesInput | MessageLikeScalarWhereWithAggregatesInput[]
    messageId?: IntWithAggregatesFilter<"MessageLike"> | number
    userId?: IntWithAggregatesFilter<"MessageLike"> | number
  }

  export type PrivateMessageWhereInput = {
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    id?: IntFilter<"PrivateMessage"> | number
    message?: StringFilter<"PrivateMessage"> | string
    image?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    userId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
    isRead?: BoolFilter<"PrivateMessage"> | boolean
    likes?: PrivateMessageLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    likes?: PrivateMessageLikeOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    _relevance?: PrivateMessageOrderByRelevanceInput
  }

  export type PrivateMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    OR?: PrivateMessageWhereInput[]
    NOT?: PrivateMessageWhereInput | PrivateMessageWhereInput[]
    message?: StringFilter<"PrivateMessage"> | string
    image?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    userId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
    isRead?: BoolFilter<"PrivateMessage"> | boolean
    likes?: PrivateMessageLikeListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PrivateMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
    _count?: PrivateMessageCountOrderByAggregateInput
    _avg?: PrivateMessageAvgOrderByAggregateInput
    _max?: PrivateMessageMaxOrderByAggregateInput
    _min?: PrivateMessageMinOrderByAggregateInput
    _sum?: PrivateMessageSumOrderByAggregateInput
  }

  export type PrivateMessageScalarWhereWithAggregatesInput = {
    AND?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    OR?: PrivateMessageScalarWhereWithAggregatesInput[]
    NOT?: PrivateMessageScalarWhereWithAggregatesInput | PrivateMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PrivateMessage"> | number
    message?: StringWithAggregatesFilter<"PrivateMessage"> | string
    image?: StringNullableWithAggregatesFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PrivateMessage"> | Date | string
    userId?: IntWithAggregatesFilter<"PrivateMessage"> | number
    receiverId?: IntWithAggregatesFilter<"PrivateMessage"> | number
    isRead?: BoolWithAggregatesFilter<"PrivateMessage"> | boolean
  }

  export type PrivateMessageLikeWhereInput = {
    AND?: PrivateMessageLikeWhereInput | PrivateMessageLikeWhereInput[]
    OR?: PrivateMessageLikeWhereInput[]
    NOT?: PrivateMessageLikeWhereInput | PrivateMessageLikeWhereInput[]
    privateMessageId?: IntFilter<"PrivateMessageLike"> | number
    userId?: IntFilter<"PrivateMessageLike"> | number
    privateMessage?: XOR<PrivateMessageScalarRelationFilter, PrivateMessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PrivateMessageLikeOrderByWithRelationInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
    privateMessage?: PrivateMessageOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PrivateMessageLikeWhereUniqueInput = Prisma.AtLeast<{
    privateMessageId_userId?: PrivateMessageLikePrivateMessageIdUserIdCompoundUniqueInput
    AND?: PrivateMessageLikeWhereInput | PrivateMessageLikeWhereInput[]
    OR?: PrivateMessageLikeWhereInput[]
    NOT?: PrivateMessageLikeWhereInput | PrivateMessageLikeWhereInput[]
    privateMessageId?: IntFilter<"PrivateMessageLike"> | number
    userId?: IntFilter<"PrivateMessageLike"> | number
    privateMessage?: XOR<PrivateMessageScalarRelationFilter, PrivateMessageWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "privateMessageId_userId">

  export type PrivateMessageLikeOrderByWithAggregationInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
    _count?: PrivateMessageLikeCountOrderByAggregateInput
    _avg?: PrivateMessageLikeAvgOrderByAggregateInput
    _max?: PrivateMessageLikeMaxOrderByAggregateInput
    _min?: PrivateMessageLikeMinOrderByAggregateInput
    _sum?: PrivateMessageLikeSumOrderByAggregateInput
  }

  export type PrivateMessageLikeScalarWhereWithAggregatesInput = {
    AND?: PrivateMessageLikeScalarWhereWithAggregatesInput | PrivateMessageLikeScalarWhereWithAggregatesInput[]
    OR?: PrivateMessageLikeScalarWhereWithAggregatesInput[]
    NOT?: PrivateMessageLikeScalarWhereWithAggregatesInput | PrivateMessageLikeScalarWhereWithAggregatesInput[]
    privateMessageId?: IntWithAggregatesFilter<"PrivateMessageLike"> | number
    userId?: IntWithAggregatesFilter<"PrivateMessageLike"> | number
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    name?: StringFilter<"ChatRoom"> | string
    description?: StringNullableFilter<"ChatRoom"> | string | null
    isPrivate?: BoolFilter<"ChatRoom"> | boolean
    password?: StringNullableFilter<"ChatRoom"> | string | null
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserChatRoomListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creator?: UserOrderByWithRelationInput
    users?: UserChatRoomOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    _relevance?: ChatRoomOrderByRelevanceInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    name?: StringFilter<"ChatRoom"> | string
    description?: StringNullableFilter<"ChatRoom"> | string | null
    isPrivate?: BoolFilter<"ChatRoom"> | boolean
    password?: StringNullableFilter<"ChatRoom"> | string | null
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    users?: UserChatRoomListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isPrivate?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatRoom"> | number
    name?: StringWithAggregatesFilter<"ChatRoom"> | string
    description?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    isPrivate?: BoolWithAggregatesFilter<"ChatRoom"> | boolean
    password?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    createdBy?: IntWithAggregatesFilter<"ChatRoom"> | number
  }

  export type UserChatRoomWhereInput = {
    AND?: UserChatRoomWhereInput | UserChatRoomWhereInput[]
    OR?: UserChatRoomWhereInput[]
    NOT?: UserChatRoomWhereInput | UserChatRoomWhereInput[]
    userId?: IntFilter<"UserChatRoom"> | number
    chatRoomId?: IntFilter<"UserChatRoom"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }

  export type UserChatRoomOrderByWithRelationInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
    user?: UserOrderByWithRelationInput
    chatRoom?: ChatRoomOrderByWithRelationInput
  }

  export type UserChatRoomWhereUniqueInput = Prisma.AtLeast<{
    userId_chatRoomId?: UserChatRoomUserIdChatRoomIdCompoundUniqueInput
    AND?: UserChatRoomWhereInput | UserChatRoomWhereInput[]
    OR?: UserChatRoomWhereInput[]
    NOT?: UserChatRoomWhereInput | UserChatRoomWhereInput[]
    userId?: IntFilter<"UserChatRoom"> | number
    chatRoomId?: IntFilter<"UserChatRoom"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chatRoom?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }, "userId_chatRoomId">

  export type UserChatRoomOrderByWithAggregationInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
    _count?: UserChatRoomCountOrderByAggregateInput
    _avg?: UserChatRoomAvgOrderByAggregateInput
    _max?: UserChatRoomMaxOrderByAggregateInput
    _min?: UserChatRoomMinOrderByAggregateInput
    _sum?: UserChatRoomSumOrderByAggregateInput
  }

  export type UserChatRoomScalarWhereWithAggregatesInput = {
    AND?: UserChatRoomScalarWhereWithAggregatesInput | UserChatRoomScalarWhereWithAggregatesInput[]
    OR?: UserChatRoomScalarWhereWithAggregatesInput[]
    NOT?: UserChatRoomScalarWhereWithAggregatesInput | UserChatRoomScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserChatRoom"> | number
    chatRoomId?: IntWithAggregatesFilter<"UserChatRoom"> | number
  }

  export type FriendWhereInput = {
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendOrderByWithRelationInput = {
    userId?: SortOrder
    friendId?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendWhereUniqueInput = Prisma.AtLeast<{
    userId_friendId?: FriendUserIdFriendIdCompoundUniqueInput
    AND?: FriendWhereInput | FriendWhereInput[]
    OR?: FriendWhereInput[]
    NOT?: FriendWhereInput | FriendWhereInput[]
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_friendId" | "userId_friendId">

  export type FriendOrderByWithAggregationInput = {
    userId?: SortOrder
    friendId?: SortOrder
    _count?: FriendCountOrderByAggregateInput
    _avg?: FriendAvgOrderByAggregateInput
    _max?: FriendMaxOrderByAggregateInput
    _min?: FriendMinOrderByAggregateInput
    _sum?: FriendSumOrderByAggregateInput
  }

  export type FriendScalarWhereWithAggregatesInput = {
    AND?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    OR?: FriendScalarWhereWithAggregatesInput[]
    NOT?: FriendScalarWhereWithAggregatesInput | FriendScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Friend"> | number
    friendId?: IntWithAggregatesFilter<"Friend"> | number
  }

  export type FriendRequestWhereInput = {
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    id?: IntFilter<"FriendRequest"> | number
    senderId?: IntFilter<"FriendRequest"> | number
    receiverId?: IntFilter<"FriendRequest"> | number
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendRequestOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    _relevance?: FriendRequestOrderByRelevanceInput
  }

  export type FriendRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FriendRequestWhereInput | FriendRequestWhereInput[]
    OR?: FriendRequestWhereInput[]
    NOT?: FriendRequestWhereInput | FriendRequestWhereInput[]
    senderId?: IntFilter<"FriendRequest"> | number
    receiverId?: IntFilter<"FriendRequest"> | number
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FriendRequestOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FriendRequestCountOrderByAggregateInput
    _avg?: FriendRequestAvgOrderByAggregateInput
    _max?: FriendRequestMaxOrderByAggregateInput
    _min?: FriendRequestMinOrderByAggregateInput
    _sum?: FriendRequestSumOrderByAggregateInput
  }

  export type FriendRequestScalarWhereWithAggregatesInput = {
    AND?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    OR?: FriendRequestScalarWhereWithAggregatesInput[]
    NOT?: FriendRequestScalarWhereWithAggregatesInput | FriendRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FriendRequest"> | number
    senderId?: IntWithAggregatesFilter<"FriendRequest"> | number
    receiverId?: IntWithAggregatesFilter<"FriendRequest"> | number
    status?: StringWithAggregatesFilter<"FriendRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FriendRequest"> | Date | string
  }

  export type OtpCreateInput = {
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OtpUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: number
    email: string
    otp: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
  }

  export type PushSubscriptionCreateInput = {
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPushSubscriptionsInput
  }

  export type PushSubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUpdateInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput
  }

  export type PushSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionCreateManyInput = {
    id?: number
    userId: number
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUpdateManyMutationInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockCreateInput = {
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminBlocksInput
    admin: UserCreateNestedOneWithoutBlocksAdministeredInput
  }

  export type AdminBlockUncheckedCreateInput = {
    id?: number
    userId: number
    adminId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminBlockUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminBlocksNestedInput
    admin?: UserUpdateOneRequiredWithoutBlocksAdministeredNestedInput
  }

  export type AdminBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockCreateManyInput = {
    id?: number
    userId: number
    adminId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminBlockUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserCreateInput = {
    blocker: UserCreateNestedOneWithoutBlockedUsersInput
    blocked: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockedUserUncheckedCreateInput = {
    id?: number
    blockerId: number
    blockedId: number
  }

  export type BlockedUserUpdateInput = {
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput
    blocked?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockedUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockerId?: IntFieldUpdateOperationsInput | number
    blockedId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockedUserCreateManyInput = {
    id?: number
    blockerId: number
    blockedId: number
  }

  export type BlockedUserUpdateManyMutationInput = {

  }

  export type BlockedUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockerId?: IntFieldUpdateOperationsInput | number
    blockedId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: MessageLikeCreateNestedManyWithoutMessageInput
    user: UserCreateNestedOneWithoutMessagesInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    chatRoomId: number
    likes?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: MessageLikeUpdateManyWithoutMessageNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    chatRoomId?: IntFieldUpdateOperationsInput | number
    likes?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    chatRoomId: number
  }

  export type MessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateInput = {
    message: MessageCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikedMessagesInput
  }

  export type MessageLikeUncheckedCreateInput = {
    messageId: number
    userId: number
  }

  export type MessageLikeUpdateInput = {
    message?: MessageUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikedMessagesNestedInput
  }

  export type MessageLikeUncheckedUpdateInput = {
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateManyInput = {
    messageId: number
    userId: number
  }

  export type MessageLikeUpdateManyMutationInput = {

  }

  export type MessageLikeUncheckedUpdateManyInput = {
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageCreateInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isRead?: boolean
    likes?: PrivateMessageLikeCreateNestedManyWithoutPrivateMessageInput
    user: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type PrivateMessageUncheckedCreateInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    receiverId: number
    isRead?: boolean
    likes?: PrivateMessageLikeUncheckedCreateNestedManyWithoutPrivateMessageInput
  }

  export type PrivateMessageUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUpdateManyWithoutPrivateMessageNestedInput
    user?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageNestedInput
  }

  export type PrivateMessageCreateManyInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    receiverId: number
    isRead?: boolean
  }

  export type PrivateMessageUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageLikeCreateInput = {
    privateMessage: PrivateMessageCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikedPrivateMessagesInput
  }

  export type PrivateMessageLikeUncheckedCreateInput = {
    privateMessageId: number
    userId: number
  }

  export type PrivateMessageLikeUpdateInput = {
    privateMessage?: PrivateMessageUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikedPrivateMessagesNestedInput
  }

  export type PrivateMessageLikeUncheckedUpdateInput = {
    privateMessageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageLikeCreateManyInput = {
    privateMessageId: number
    userId: number
  }

  export type PrivateMessageLikeUpdateManyMutationInput = {

  }

  export type PrivateMessageLikeUncheckedUpdateManyInput = {
    privateMessageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomCreateInput = {
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedChatRoomsInput
    users?: UserChatRoomCreateNestedManyWithoutChatRoomInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    users?: UserChatRoomUncheckedCreateNestedManyWithoutChatRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput
    users?: UserChatRoomUpdateManyWithoutChatRoomNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    users?: UserChatRoomUncheckedUpdateManyWithoutChatRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
  }

  export type ChatRoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
  }

  export type UserChatRoomCreateInput = {
    user: UserCreateNestedOneWithoutChatRoomsInput
    chatRoom: ChatRoomCreateNestedOneWithoutUsersInput
  }

  export type UserChatRoomUncheckedCreateInput = {
    userId: number
    chatRoomId: number
  }

  export type UserChatRoomUpdateInput = {
    user?: UserUpdateOneRequiredWithoutChatRoomsNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserChatRoomUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type UserChatRoomCreateManyInput = {
    userId: number
    chatRoomId: number
  }

  export type UserChatRoomUpdateManyMutationInput = {

  }

  export type UserChatRoomUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendCreateInput = {
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateInput = {
    userId: number
    friendId: number
  }

  export type FriendUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendCreateManyInput = {
    userId: number
    friendId: number
  }

  export type FriendUpdateManyMutationInput = {

  }

  export type FriendUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendRequestCreateInput = {
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentFriendRequestsInput
    receiver: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendRequestUncheckedCreateInput = {
    id?: number
    senderId: number
    receiverId: number
    status?: string
    createdAt?: Date | string
  }

  export type FriendRequestUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestCreateManyInput = {
    id?: number
    senderId: number
    receiverId: number
    status?: string
    createdAt?: Date | string
  }

  export type FriendRequestUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OtpOrderByRelevanceInput = {
    fields: OtpOrderByRelevanceFieldEnum | OtpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type PushSubscriptionListRelationFilter = {
    every?: PushSubscriptionWhereInput
    some?: PushSubscriptionWhereInput
    none?: PushSubscriptionWhereInput
  }

  export type BlockedUserListRelationFilter = {
    every?: BlockedUserWhereInput
    some?: BlockedUserWhereInput
    none?: BlockedUserWhereInput
  }

  export type AdminBlockListRelationFilter = {
    every?: AdminBlockWhereInput
    some?: AdminBlockWhereInput
    none?: AdminBlockWhereInput
  }

  export type UserChatRoomListRelationFilter = {
    every?: UserChatRoomWhereInput
    some?: UserChatRoomWhereInput
    none?: UserChatRoomWhereInput
  }

  export type FriendListRelationFilter = {
    every?: FriendWhereInput
    some?: FriendWhereInput
    none?: FriendWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageLikeListRelationFilter = {
    every?: MessageLikeWhereInput
    some?: MessageLikeWhereInput
    none?: MessageLikeWhereInput
  }

  export type FriendRequestListRelationFilter = {
    every?: FriendRequestWhereInput
    some?: FriendRequestWhereInput
    none?: FriendRequestWhereInput
  }

  export type PrivateMessageListRelationFilter = {
    every?: PrivateMessageWhereInput
    some?: PrivateMessageWhereInput
    none?: PrivateMessageWhereInput
  }

  export type PrivateMessageLikeListRelationFilter = {
    every?: PrivateMessageLikeWhereInput
    some?: PrivateMessageLikeWhereInput
    none?: PrivateMessageLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PushSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockedUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateMessageLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    notification?: SortOrder
    role?: SortOrder
    sex?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    notification?: SortOrder
    role?: SortOrder
    sex?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    profileImage?: SortOrder
    notification?: SortOrder
    role?: SortOrder
    sex?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PushSubscriptionOrderByRelevanceInput = {
    fields: PushSubscriptionOrderByRelevanceFieldEnum | PushSubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PushSubscriptionUserIdEndpointHashCompoundUniqueInput = {
    userId: number
    endpointHash: string
  }

  export type PushSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    endpointHash?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PushSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    endpointHash?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    endpointHash?: SortOrder
    p256dh?: SortOrder
    auth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PushSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdminBlockOrderByRelevanceInput = {
    fields: AdminBlockOrderByRelevanceFieldEnum | AdminBlockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminBlockCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    reason?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
  }

  export type AdminBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    reason?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminBlockMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
    reason?: SortOrder
    duration?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminBlockSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    adminId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BlockedUserBlockerIdBlockedIdCompoundUniqueInput = {
    blockerId: number
    blockedId: number
  }

  export type BlockedUserCountOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type BlockedUserAvgOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type BlockedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type BlockedUserMinOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type BlockedUserSumOrderByAggregateInput = {
    id?: SortOrder
    blockerId?: SortOrder
    blockedId?: SortOrder
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type MessageOrderByRelevanceInput = {
    fields: MessageOrderByRelevanceFieldEnum | MessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type MessageLikeMessageIdUserIdCompoundUniqueInput = {
    messageId: number
    userId: number
  }

  export type MessageLikeCountOrderByAggregateInput = {
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageLikeAvgOrderByAggregateInput = {
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageLikeMaxOrderByAggregateInput = {
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageLikeMinOrderByAggregateInput = {
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type MessageLikeSumOrderByAggregateInput = {
    messageId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateMessageOrderByRelevanceInput = {
    fields: PrivateMessageOrderByRelevanceFieldEnum | PrivateMessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrivateMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
  }

  export type PrivateMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
  }

  export type PrivateMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
    isRead?: SortOrder
  }

  export type PrivateMessageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    receiverId?: SortOrder
  }

  export type PrivateMessageScalarRelationFilter = {
    is?: PrivateMessageWhereInput
    isNot?: PrivateMessageWhereInput
  }

  export type PrivateMessageLikePrivateMessageIdUserIdCompoundUniqueInput = {
    privateMessageId: number
    userId: number
  }

  export type PrivateMessageLikeCountOrderByAggregateInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateMessageLikeAvgOrderByAggregateInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateMessageLikeMaxOrderByAggregateInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateMessageLikeMinOrderByAggregateInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
  }

  export type PrivateMessageLikeSumOrderByAggregateInput = {
    privateMessageId?: SortOrder
    userId?: SortOrder
  }

  export type ChatRoomOrderByRelevanceInput = {
    fields: ChatRoomOrderByRelevanceFieldEnum | ChatRoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPrivate?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type UserChatRoomUserIdChatRoomIdCompoundUniqueInput = {
    userId: number
    chatRoomId: number
  }

  export type UserChatRoomCountOrderByAggregateInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type UserChatRoomAvgOrderByAggregateInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type UserChatRoomMaxOrderByAggregateInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type UserChatRoomMinOrderByAggregateInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type UserChatRoomSumOrderByAggregateInput = {
    userId?: SortOrder
    chatRoomId?: SortOrder
  }

  export type FriendUserIdFriendIdCompoundUniqueInput = {
    userId: number
    friendId: number
  }

  export type FriendCountOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendAvgOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMaxOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendMinOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendSumOrderByAggregateInput = {
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendRequestOrderByRelevanceInput = {
    fields: FriendRequestOrderByRelevanceFieldEnum | FriendRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FriendRequestCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type FriendRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendRequestSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PushSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type AdminBlockCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput> | AdminBlockCreateWithoutUserInput[] | AdminBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutUserInput | AdminBlockCreateOrConnectWithoutUserInput[]
    createMany?: AdminBlockCreateManyUserInputEnvelope
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
  }

  export type AdminBlockCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput> | AdminBlockCreateWithoutAdminInput[] | AdminBlockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutAdminInput | AdminBlockCreateOrConnectWithoutAdminInput[]
    createMany?: AdminBlockCreateManyAdminInputEnvelope
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
  }

  export type UserChatRoomCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput> | UserChatRoomCreateWithoutUserInput[] | UserChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutUserInput | UserChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: UserChatRoomCreateManyUserInputEnvelope
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput> | FriendRequestCreateWithoutSenderInput[] | FriendRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutSenderInput | FriendRequestCreateOrConnectWithoutSenderInput[]
    createMany?: FriendRequestCreateManySenderInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput> | FriendRequestCreateWithoutReceiverInput[] | FriendRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutReceiverInput | FriendRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendRequestCreateManyReceiverInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutUserInput = {
    create?: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput> | PrivateMessageCreateWithoutUserInput[] | PrivateMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutUserInput | PrivateMessageCreateOrConnectWithoutUserInput[]
    createMany?: PrivateMessageCreateManyUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput> | PrivateMessageLikeCreateWithoutUserInput[] | PrivateMessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutUserInput | PrivateMessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: PrivateMessageLikeCreateManyUserInputEnvelope
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
  }

  export type PushSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockerInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type BlockedUserUncheckedCreateNestedManyWithoutBlockedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
  }

  export type AdminBlockUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput> | AdminBlockCreateWithoutUserInput[] | AdminBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutUserInput | AdminBlockCreateOrConnectWithoutUserInput[]
    createMany?: AdminBlockCreateManyUserInputEnvelope
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
  }

  export type AdminBlockUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput> | AdminBlockCreateWithoutAdminInput[] | AdminBlockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutAdminInput | AdminBlockCreateOrConnectWithoutAdminInput[]
    createMany?: AdminBlockCreateManyAdminInputEnvelope
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
  }

  export type UserChatRoomUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput> | UserChatRoomCreateWithoutUserInput[] | UserChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutUserInput | UserChatRoomCreateOrConnectWithoutUserInput[]
    createMany?: UserChatRoomCreateManyUserInputEnvelope
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput> | FriendRequestCreateWithoutSenderInput[] | FriendRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutSenderInput | FriendRequestCreateOrConnectWithoutSenderInput[]
    createMany?: FriendRequestCreateManySenderInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type FriendRequestUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput> | FriendRequestCreateWithoutReceiverInput[] | FriendRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutReceiverInput | FriendRequestCreateOrConnectWithoutReceiverInput[]
    createMany?: FriendRequestCreateManyReceiverInputEnvelope
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput> | PrivateMessageCreateWithoutUserInput[] | PrivateMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutUserInput | PrivateMessageCreateOrConnectWithoutUserInput[]
    createMany?: PrivateMessageCreateManyUserInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
  }

  export type PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput> | PrivateMessageLikeCreateWithoutUserInput[] | PrivateMessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutUserInput | PrivateMessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: PrivateMessageLikeCreateManyUserInputEnvelope
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type PushSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type AdminBlockUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput> | AdminBlockCreateWithoutUserInput[] | AdminBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutUserInput | AdminBlockCreateOrConnectWithoutUserInput[]
    upsert?: AdminBlockUpsertWithWhereUniqueWithoutUserInput | AdminBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminBlockCreateManyUserInputEnvelope
    set?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    disconnect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    delete?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    update?: AdminBlockUpdateWithWhereUniqueWithoutUserInput | AdminBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminBlockUpdateManyWithWhereWithoutUserInput | AdminBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
  }

  export type AdminBlockUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput> | AdminBlockCreateWithoutAdminInput[] | AdminBlockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutAdminInput | AdminBlockCreateOrConnectWithoutAdminInput[]
    upsert?: AdminBlockUpsertWithWhereUniqueWithoutAdminInput | AdminBlockUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminBlockCreateManyAdminInputEnvelope
    set?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    disconnect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    delete?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    update?: AdminBlockUpdateWithWhereUniqueWithoutAdminInput | AdminBlockUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminBlockUpdateManyWithWhereWithoutAdminInput | AdminBlockUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
  }

  export type UserChatRoomUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput> | UserChatRoomCreateWithoutUserInput[] | UserChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutUserInput | UserChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: UserChatRoomUpsertWithWhereUniqueWithoutUserInput | UserChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChatRoomCreateManyUserInputEnvelope
    set?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    disconnect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    delete?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    update?: UserChatRoomUpdateWithWhereUniqueWithoutUserInput | UserChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChatRoomUpdateManyWithWhereWithoutUserInput | UserChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutUserInput | MessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutUserInput | MessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutUserInput | MessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput> | FriendRequestCreateWithoutSenderInput[] | FriendRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutSenderInput | FriendRequestCreateOrConnectWithoutSenderInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutSenderInput | FriendRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendRequestCreateManySenderInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutSenderInput | FriendRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutSenderInput | FriendRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput> | FriendRequestCreateWithoutReceiverInput[] | FriendRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutReceiverInput | FriendRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutReceiverInput | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendRequestCreateManyReceiverInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutReceiverInput | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutReceiverInput | FriendRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput> | PrivateMessageCreateWithoutUserInput[] | PrivateMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutUserInput | PrivateMessageCreateOrConnectWithoutUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutUserInput | PrivateMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrivateMessageCreateManyUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutUserInput | PrivateMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutUserInput | PrivateMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput | PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput | PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReceiverInput | PrivateMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput> | PrivateMessageLikeCreateWithoutUserInput[] | PrivateMessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutUserInput | PrivateMessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: PrivateMessageLikeUpsertWithWhereUniqueWithoutUserInput | PrivateMessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrivateMessageLikeCreateManyUserInputEnvelope
    set?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    disconnect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    delete?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    update?: PrivateMessageLikeUpdateWithWhereUniqueWithoutUserInput | PrivateMessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrivateMessageLikeUpdateManyWithWhereWithoutUserInput | PrivateMessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput> | PushSubscriptionCreateWithoutUserInput[] | PushSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PushSubscriptionCreateOrConnectWithoutUserInput | PushSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: PushSubscriptionUpsertWithWhereUniqueWithoutUserInput | PushSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PushSubscriptionCreateManyUserInputEnvelope
    set?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    disconnect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    delete?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    connect?: PushSubscriptionWhereUniqueInput | PushSubscriptionWhereUniqueInput[]
    update?: PushSubscriptionUpdateWithWhereUniqueWithoutUserInput | PushSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PushSubscriptionUpdateManyWithWhereWithoutUserInput | PushSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput> | BlockedUserCreateWithoutBlockerInput[] | BlockedUserUncheckedCreateWithoutBlockerInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockerInput | BlockedUserCreateOrConnectWithoutBlockerInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockerInput | BlockedUserUpsertWithWhereUniqueWithoutBlockerInput[]
    createMany?: BlockedUserCreateManyBlockerInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockerInput | BlockedUserUpdateWithWhereUniqueWithoutBlockerInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockerInput | BlockedUserUpdateManyWithWhereWithoutBlockerInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput = {
    create?: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput> | BlockedUserCreateWithoutBlockedInput[] | BlockedUserUncheckedCreateWithoutBlockedInput[]
    connectOrCreate?: BlockedUserCreateOrConnectWithoutBlockedInput | BlockedUserCreateOrConnectWithoutBlockedInput[]
    upsert?: BlockedUserUpsertWithWhereUniqueWithoutBlockedInput | BlockedUserUpsertWithWhereUniqueWithoutBlockedInput[]
    createMany?: BlockedUserCreateManyBlockedInputEnvelope
    set?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    disconnect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    delete?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    connect?: BlockedUserWhereUniqueInput | BlockedUserWhereUniqueInput[]
    update?: BlockedUserUpdateWithWhereUniqueWithoutBlockedInput | BlockedUserUpdateWithWhereUniqueWithoutBlockedInput[]
    updateMany?: BlockedUserUpdateManyWithWhereWithoutBlockedInput | BlockedUserUpdateManyWithWhereWithoutBlockedInput[]
    deleteMany?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
  }

  export type AdminBlockUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput> | AdminBlockCreateWithoutUserInput[] | AdminBlockUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutUserInput | AdminBlockCreateOrConnectWithoutUserInput[]
    upsert?: AdminBlockUpsertWithWhereUniqueWithoutUserInput | AdminBlockUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AdminBlockCreateManyUserInputEnvelope
    set?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    disconnect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    delete?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    update?: AdminBlockUpdateWithWhereUniqueWithoutUserInput | AdminBlockUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AdminBlockUpdateManyWithWhereWithoutUserInput | AdminBlockUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
  }

  export type AdminBlockUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput> | AdminBlockCreateWithoutAdminInput[] | AdminBlockUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminBlockCreateOrConnectWithoutAdminInput | AdminBlockCreateOrConnectWithoutAdminInput[]
    upsert?: AdminBlockUpsertWithWhereUniqueWithoutAdminInput | AdminBlockUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminBlockCreateManyAdminInputEnvelope
    set?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    disconnect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    delete?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    connect?: AdminBlockWhereUniqueInput | AdminBlockWhereUniqueInput[]
    update?: AdminBlockUpdateWithWhereUniqueWithoutAdminInput | AdminBlockUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminBlockUpdateManyWithWhereWithoutAdminInput | AdminBlockUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
  }

  export type UserChatRoomUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput> | UserChatRoomCreateWithoutUserInput[] | UserChatRoomUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutUserInput | UserChatRoomCreateOrConnectWithoutUserInput[]
    upsert?: UserChatRoomUpsertWithWhereUniqueWithoutUserInput | UserChatRoomUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserChatRoomCreateManyUserInputEnvelope
    set?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    disconnect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    delete?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    update?: UserChatRoomUpdateWithWhereUniqueWithoutUserInput | UserChatRoomUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserChatRoomUpdateManyWithWhereWithoutUserInput | UserChatRoomUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput> | FriendCreateWithoutUserInput[] | FriendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutUserInput | FriendCreateOrConnectWithoutUserInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutUserInput | FriendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendCreateManyUserInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutUserInput | FriendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutUserInput | FriendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput> | FriendCreateWithoutFriendInput[] | FriendUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendCreateOrConnectWithoutFriendInput | FriendCreateOrConnectWithoutFriendInput[]
    upsert?: FriendUpsertWithWhereUniqueWithoutFriendInput | FriendUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendCreateManyFriendInputEnvelope
    set?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    disconnect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    delete?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    connect?: FriendWhereUniqueInput | FriendWhereUniqueInput[]
    update?: FriendUpdateWithWhereUniqueWithoutFriendInput | FriendUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendUpdateManyWithWhereWithoutFriendInput | FriendUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendScalarWhereInput | FriendScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput> | ChatRoomCreateWithoutCreatorInput[] | ChatRoomUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCreatorInput | ChatRoomCreateOrConnectWithoutCreatorInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCreatorInput | ChatRoomUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ChatRoomCreateManyCreatorInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCreatorInput | ChatRoomUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCreatorInput | ChatRoomUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutUserInput | MessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutUserInput | MessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutUserInput | MessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput> | FriendRequestCreateWithoutSenderInput[] | FriendRequestUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutSenderInput | FriendRequestCreateOrConnectWithoutSenderInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutSenderInput | FriendRequestUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: FriendRequestCreateManySenderInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutSenderInput | FriendRequestUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutSenderInput | FriendRequestUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput> | FriendRequestCreateWithoutReceiverInput[] | FriendRequestUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: FriendRequestCreateOrConnectWithoutReceiverInput | FriendRequestCreateOrConnectWithoutReceiverInput[]
    upsert?: FriendRequestUpsertWithWhereUniqueWithoutReceiverInput | FriendRequestUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: FriendRequestCreateManyReceiverInputEnvelope
    set?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    disconnect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    delete?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    connect?: FriendRequestWhereUniqueInput | FriendRequestWhereUniqueInput[]
    update?: FriendRequestUpdateWithWhereUniqueWithoutReceiverInput | FriendRequestUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: FriendRequestUpdateManyWithWhereWithoutReceiverInput | FriendRequestUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput> | PrivateMessageCreateWithoutUserInput[] | PrivateMessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutUserInput | PrivateMessageCreateOrConnectWithoutUserInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutUserInput | PrivateMessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrivateMessageCreateManyUserInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutUserInput | PrivateMessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutUserInput | PrivateMessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput> | PrivateMessageCreateWithoutReceiverInput[] | PrivateMessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutReceiverInput | PrivateMessageCreateOrConnectWithoutReceiverInput[]
    upsert?: PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput | PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PrivateMessageCreateManyReceiverInputEnvelope
    set?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    disconnect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    delete?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    connect?: PrivateMessageWhereUniqueInput | PrivateMessageWhereUniqueInput[]
    update?: PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput | PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PrivateMessageUpdateManyWithWhereWithoutReceiverInput | PrivateMessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
  }

  export type PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput> | PrivateMessageLikeCreateWithoutUserInput[] | PrivateMessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutUserInput | PrivateMessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: PrivateMessageLikeUpsertWithWhereUniqueWithoutUserInput | PrivateMessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PrivateMessageLikeCreateManyUserInputEnvelope
    set?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    disconnect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    delete?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    update?: PrivateMessageLikeUpdateWithWhereUniqueWithoutUserInput | PrivateMessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PrivateMessageLikeUpdateManyWithWhereWithoutUserInput | PrivateMessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPushSubscriptionsInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPushSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPushSubscriptionsInput
    upsert?: UserUpsertWithoutPushSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPushSubscriptionsInput, UserUpdateWithoutPushSubscriptionsInput>, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutAdminBlocksInput = {
    create?: XOR<UserCreateWithoutAdminBlocksInput, UserUncheckedCreateWithoutAdminBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminBlocksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlocksAdministeredInput = {
    create?: XOR<UserCreateWithoutBlocksAdministeredInput, UserUncheckedCreateWithoutBlocksAdministeredInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksAdministeredInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAdminBlocksNestedInput = {
    create?: XOR<UserCreateWithoutAdminBlocksInput, UserUncheckedCreateWithoutAdminBlocksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminBlocksInput
    upsert?: UserUpsertWithoutAdminBlocksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminBlocksInput, UserUpdateWithoutAdminBlocksInput>, UserUncheckedUpdateWithoutAdminBlocksInput>
  }

  export type UserUpdateOneRequiredWithoutBlocksAdministeredNestedInput = {
    create?: XOR<UserCreateWithoutBlocksAdministeredInput, UserUncheckedCreateWithoutBlocksAdministeredInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlocksAdministeredInput
    upsert?: UserUpsertWithoutBlocksAdministeredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlocksAdministeredInput, UserUpdateWithoutBlocksAdministeredInput>, UserUncheckedUpdateWithoutBlocksAdministeredInput>
  }

  export type UserCreateNestedOneWithoutBlockedUsersInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBlockedByInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBlockedUsersNestedInput = {
    create?: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedUsersInput
    upsert?: UserUpsertWithoutBlockedUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedUsersInput, UserUpdateWithoutBlockedUsersInput>, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserUpdateOneRequiredWithoutBlockedByNestedInput = {
    create?: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlockedByInput
    upsert?: UserUpsertWithoutBlockedByInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBlockedByInput, UserUpdateWithoutBlockedByInput>, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type MessageLikeCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type MessageLikeUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type MessageLikeUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutMessageInput | MessageLikeUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutMessageInput | MessageLikeUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutMessageInput | MessageLikeUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput
    upsert?: ChatRoomUpsertWithoutMessagesInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessagesInput, ChatRoomUpdateWithoutMessagesInput>, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageLikeUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutMessageInput | MessageLikeUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutMessageInput | MessageLikeUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutMessageInput | MessageLikeUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type MessageCreateNestedOneWithoutLikesInput = {
    create?: XOR<MessageCreateWithoutLikesInput, MessageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLikesInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedMessagesInput = {
    create?: XOR<UserCreateWithoutLikedMessagesInput, UserUncheckedCreateWithoutLikedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type MessageUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<MessageCreateWithoutLikesInput, MessageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLikesInput
    upsert?: MessageUpsertWithoutLikesInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutLikesInput, MessageUpdateWithoutLikesInput>, MessageUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutLikedMessagesInput, UserUncheckedCreateWithoutLikedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedMessagesInput
    upsert?: UserUpsertWithoutLikedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedMessagesInput, UserUpdateWithoutLikedMessagesInput>, UserUncheckedUpdateWithoutLikedMessagesInput>
  }

  export type PrivateMessageLikeCreateNestedManyWithoutPrivateMessageInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput> | PrivateMessageLikeCreateWithoutPrivateMessageInput[] | PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput | PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput[]
    createMany?: PrivateMessageLikeCreateManyPrivateMessageInputEnvelope
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type PrivateMessageLikeUncheckedCreateNestedManyWithoutPrivateMessageInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput> | PrivateMessageLikeCreateWithoutPrivateMessageInput[] | PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput | PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput[]
    createMany?: PrivateMessageLikeCreateManyPrivateMessageInputEnvelope
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
  }

  export type PrivateMessageLikeUpdateManyWithoutPrivateMessageNestedInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput> | PrivateMessageLikeCreateWithoutPrivateMessageInput[] | PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput | PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput[]
    upsert?: PrivateMessageLikeUpsertWithWhereUniqueWithoutPrivateMessageInput | PrivateMessageLikeUpsertWithWhereUniqueWithoutPrivateMessageInput[]
    createMany?: PrivateMessageLikeCreateManyPrivateMessageInputEnvelope
    set?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    disconnect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    delete?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    update?: PrivateMessageLikeUpdateWithWhereUniqueWithoutPrivateMessageInput | PrivateMessageLikeUpdateWithWhereUniqueWithoutPrivateMessageInput[]
    updateMany?: PrivateMessageLikeUpdateManyWithWhereWithoutPrivateMessageInput | PrivateMessageLikeUpdateManyWithWhereWithoutPrivateMessageInput[]
    deleteMany?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageNestedInput = {
    create?: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput> | PrivateMessageLikeCreateWithoutPrivateMessageInput[] | PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput[]
    connectOrCreate?: PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput | PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput[]
    upsert?: PrivateMessageLikeUpsertWithWhereUniqueWithoutPrivateMessageInput | PrivateMessageLikeUpsertWithWhereUniqueWithoutPrivateMessageInput[]
    createMany?: PrivateMessageLikeCreateManyPrivateMessageInputEnvelope
    set?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    disconnect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    delete?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    connect?: PrivateMessageLikeWhereUniqueInput | PrivateMessageLikeWhereUniqueInput[]
    update?: PrivateMessageLikeUpdateWithWhereUniqueWithoutPrivateMessageInput | PrivateMessageLikeUpdateWithWhereUniqueWithoutPrivateMessageInput[]
    updateMany?: PrivateMessageLikeUpdateManyWithWhereWithoutPrivateMessageInput | PrivateMessageLikeUpdateManyWithWhereWithoutPrivateMessageInput[]
    deleteMany?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
  }

  export type PrivateMessageCreateNestedOneWithoutLikesInput = {
    create?: XOR<PrivateMessageCreateWithoutLikesInput, PrivateMessageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutLikesInput
    connect?: PrivateMessageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedPrivateMessagesInput = {
    create?: XOR<UserCreateWithoutLikedPrivateMessagesInput, UserUncheckedCreateWithoutLikedPrivateMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPrivateMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type PrivateMessageUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PrivateMessageCreateWithoutLikesInput, PrivateMessageUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PrivateMessageCreateOrConnectWithoutLikesInput
    upsert?: PrivateMessageUpsertWithoutLikesInput
    connect?: PrivateMessageWhereUniqueInput
    update?: XOR<XOR<PrivateMessageUpdateToOneWithWhereWithoutLikesInput, PrivateMessageUpdateWithoutLikesInput>, PrivateMessageUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikedPrivateMessagesNestedInput = {
    create?: XOR<UserCreateWithoutLikedPrivateMessagesInput, UserUncheckedCreateWithoutLikedPrivateMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPrivateMessagesInput
    upsert?: UserUpsertWithoutLikedPrivateMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedPrivateMessagesInput, UserUpdateWithoutLikedPrivateMessagesInput>, UserUncheckedUpdateWithoutLikedPrivateMessagesInput>
  }

  export type UserCreateNestedOneWithoutCreatedChatRoomsInput = {
    create?: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChatRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type UserChatRoomCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput> | UserChatRoomCreateWithoutChatRoomInput[] | UserChatRoomUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutChatRoomInput | UserChatRoomCreateOrConnectWithoutChatRoomInput[]
    createMany?: UserChatRoomCreateManyChatRoomInputEnvelope
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserChatRoomUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput> | UserChatRoomCreateWithoutChatRoomInput[] | UserChatRoomUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutChatRoomInput | UserChatRoomCreateOrConnectWithoutChatRoomInput[]
    createMany?: UserChatRoomCreateManyChatRoomInputEnvelope
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedChatRoomsInput
    upsert?: UserUpsertWithoutCreatedChatRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedChatRoomsInput, UserUpdateWithoutCreatedChatRoomsInput>, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
  }

  export type UserChatRoomUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput> | UserChatRoomCreateWithoutChatRoomInput[] | UserChatRoomUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutChatRoomInput | UserChatRoomCreateOrConnectWithoutChatRoomInput[]
    upsert?: UserChatRoomUpsertWithWhereUniqueWithoutChatRoomInput | UserChatRoomUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: UserChatRoomCreateManyChatRoomInputEnvelope
    set?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    disconnect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    delete?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    update?: UserChatRoomUpdateWithWhereUniqueWithoutChatRoomInput | UserChatRoomUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: UserChatRoomUpdateManyWithWhereWithoutChatRoomInput | UserChatRoomUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomInput | MessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomInput | MessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomInput | MessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserChatRoomUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput> | UserChatRoomCreateWithoutChatRoomInput[] | UserChatRoomUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: UserChatRoomCreateOrConnectWithoutChatRoomInput | UserChatRoomCreateOrConnectWithoutChatRoomInput[]
    upsert?: UserChatRoomUpsertWithWhereUniqueWithoutChatRoomInput | UserChatRoomUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: UserChatRoomCreateManyChatRoomInputEnvelope
    set?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    disconnect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    delete?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    connect?: UserChatRoomWhereUniqueInput | UserChatRoomWhereUniqueInput[]
    update?: UserChatRoomUpdateWithWhereUniqueWithoutChatRoomInput | UserChatRoomUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: UserChatRoomUpdateManyWithWhereWithoutChatRoomInput | UserChatRoomUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput> | MessageCreateWithoutChatRoomInput[] | MessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatRoomInput | MessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatRoomInput | MessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: MessageCreateManyChatRoomInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatRoomInput | MessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatRoomInput | MessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatRoomsInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutUsersInput = {
    create?: XOR<ChatRoomCreateWithoutUsersInput, ChatRoomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUsersInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatRoomsNestedInput = {
    create?: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatRoomsInput
    upsert?: UserUpsertWithoutChatRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatRoomsInput, UserUpdateWithoutChatRoomsInput>, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type ChatRoomUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<ChatRoomCreateWithoutUsersInput, ChatRoomUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUsersInput
    upsert?: ChatRoomUpsertWithoutUsersInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutUsersInput, ChatRoomUpdateWithoutUsersInput>, ChatRoomUncheckedUpdateWithoutUsersInput>
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutSentFriendRequestsInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedFriendRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentFriendRequestsInput
    upsert?: UserUpsertWithoutSentFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentFriendRequestsInput, UserUpdateWithoutSentFriendRequestsInput>, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedFriendRequestsInput
    upsert?: UserUpsertWithoutReceivedFriendRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput, UserUpdateWithoutReceivedFriendRequestsInput>, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[]
    notIn?: $Enums.Sex[]
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PushSubscriptionCreateWithoutUserInput = {
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PushSubscriptionCreateOrConnectWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionCreateManyUserInputEnvelope = {
    data: PushSubscriptionCreateManyUserInput | PushSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BlockedUserCreateWithoutBlockerInput = {
    blocked: UserCreateNestedOneWithoutBlockedByInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockerInput = {
    id?: number
    blockedId: number
  }

  export type BlockedUserCreateOrConnectWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserCreateManyBlockerInputEnvelope = {
    data: BlockedUserCreateManyBlockerInput | BlockedUserCreateManyBlockerInput[]
    skipDuplicates?: boolean
  }

  export type BlockedUserCreateWithoutBlockedInput = {
    blocker: UserCreateNestedOneWithoutBlockedUsersInput
  }

  export type BlockedUserUncheckedCreateWithoutBlockedInput = {
    id?: number
    blockerId: number
  }

  export type BlockedUserCreateOrConnectWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserCreateManyBlockedInputEnvelope = {
    data: BlockedUserCreateManyBlockedInput | BlockedUserCreateManyBlockedInput[]
    skipDuplicates?: boolean
  }

  export type AdminBlockCreateWithoutUserInput = {
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutBlocksAdministeredInput
  }

  export type AdminBlockUncheckedCreateWithoutUserInput = {
    id?: number
    adminId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminBlockCreateOrConnectWithoutUserInput = {
    where: AdminBlockWhereUniqueInput
    create: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput>
  }

  export type AdminBlockCreateManyUserInputEnvelope = {
    data: AdminBlockCreateManyUserInput | AdminBlockCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AdminBlockCreateWithoutAdminInput = {
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminBlocksInput
  }

  export type AdminBlockUncheckedCreateWithoutAdminInput = {
    id?: number
    userId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminBlockCreateOrConnectWithoutAdminInput = {
    where: AdminBlockWhereUniqueInput
    create: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput>
  }

  export type AdminBlockCreateManyAdminInputEnvelope = {
    data: AdminBlockCreateManyAdminInput | AdminBlockCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type UserChatRoomCreateWithoutUserInput = {
    chatRoom: ChatRoomCreateNestedOneWithoutUsersInput
  }

  export type UserChatRoomUncheckedCreateWithoutUserInput = {
    chatRoomId: number
  }

  export type UserChatRoomCreateOrConnectWithoutUserInput = {
    where: UserChatRoomWhereUniqueInput
    create: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput>
  }

  export type UserChatRoomCreateManyUserInputEnvelope = {
    data: UserChatRoomCreateManyUserInput | UserChatRoomCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutUserInput = {
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type FriendUncheckedCreateWithoutUserInput = {
    friendId: number
  }

  export type FriendCreateOrConnectWithoutUserInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendCreateManyUserInputEnvelope = {
    data: FriendCreateManyUserInput | FriendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendCreateWithoutFriendInput = {
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendUncheckedCreateWithoutFriendInput = {
    userId: number
  }

  export type FriendCreateOrConnectWithoutFriendInput = {
    where: FriendWhereUniqueInput
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendCreateManyFriendInputEnvelope = {
    data: FriendCreateManyFriendInput | FriendCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutCreatorInput = {
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserChatRoomCreateNestedManyWithoutChatRoomInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserChatRoomUncheckedCreateNestedManyWithoutChatRoomInput
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomCreateManyCreatorInputEnvelope = {
    data: ChatRoomCreateManyCreatorInput | ChatRoomCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: MessageLikeCreateNestedManyWithoutMessageInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatRoomId: number
    likes?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageLikeCreateWithoutUserInput = {
    message: MessageCreateNestedOneWithoutLikesInput
  }

  export type MessageLikeUncheckedCreateWithoutUserInput = {
    messageId: number
  }

  export type MessageLikeCreateOrConnectWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    create: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput>
  }

  export type MessageLikeCreateManyUserInputEnvelope = {
    data: MessageLikeCreateManyUserInput | MessageLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutSenderInput = {
    status?: string
    createdAt?: Date | string
    receiver: UserCreateNestedOneWithoutReceivedFriendRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutSenderInput = {
    id?: number
    receiverId: number
    status?: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput>
  }

  export type FriendRequestCreateManySenderInputEnvelope = {
    data: FriendRequestCreateManySenderInput | FriendRequestCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type FriendRequestCreateWithoutReceiverInput = {
    status?: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentFriendRequestsInput
  }

  export type FriendRequestUncheckedCreateWithoutReceiverInput = {
    id?: number
    senderId: number
    status?: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateOrConnectWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput
    create: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput>
  }

  export type FriendRequestCreateManyReceiverInputEnvelope = {
    data: FriendRequestCreateManyReceiverInput | FriendRequestCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutUserInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isRead?: boolean
    likes?: PrivateMessageLikeCreateNestedManyWithoutPrivateMessageInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverId: number
    isRead?: boolean
    likes?: PrivateMessageLikeUncheckedCreateNestedManyWithoutPrivateMessageInput
  }

  export type PrivateMessageCreateOrConnectWithoutUserInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput>
  }

  export type PrivateMessageCreateManyUserInputEnvelope = {
    data: PrivateMessageCreateManyUserInput | PrivateMessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageCreateWithoutReceiverInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isRead?: boolean
    likes?: PrivateMessageLikeCreateNestedManyWithoutPrivateMessageInput
    user: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    isRead?: boolean
    likes?: PrivateMessageLikeUncheckedCreateNestedManyWithoutPrivateMessageInput
  }

  export type PrivateMessageCreateOrConnectWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateMessageCreateManyReceiverInputEnvelope = {
    data: PrivateMessageCreateManyReceiverInput | PrivateMessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type PrivateMessageLikeCreateWithoutUserInput = {
    privateMessage: PrivateMessageCreateNestedOneWithoutLikesInput
  }

  export type PrivateMessageLikeUncheckedCreateWithoutUserInput = {
    privateMessageId: number
  }

  export type PrivateMessageLikeCreateOrConnectWithoutUserInput = {
    where: PrivateMessageLikeWhereUniqueInput
    create: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput>
  }

  export type PrivateMessageLikeCreateManyUserInputEnvelope = {
    data: PrivateMessageLikeCreateManyUserInput | PrivateMessageLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PushSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    update: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<PushSubscriptionCreateWithoutUserInput, PushSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type PushSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: PushSubscriptionWhereUniqueInput
    data: XOR<PushSubscriptionUpdateWithoutUserInput, PushSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type PushSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: PushSubscriptionScalarWhereInput
    data: XOR<PushSubscriptionUpdateManyMutationInput, PushSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type PushSubscriptionScalarWhereInput = {
    AND?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    OR?: PushSubscriptionScalarWhereInput[]
    NOT?: PushSubscriptionScalarWhereInput | PushSubscriptionScalarWhereInput[]
    id?: IntFilter<"PushSubscription"> | number
    userId?: IntFilter<"PushSubscription"> | number
    endpoint?: StringFilter<"PushSubscription"> | string
    endpointHash?: StringFilter<"PushSubscription"> | string
    p256dh?: StringFilter<"PushSubscription"> | string
    auth?: StringFilter<"PushSubscription"> | string
    createdAt?: DateTimeFilter<"PushSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"PushSubscription"> | Date | string
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
    create: XOR<BlockedUserCreateWithoutBlockerInput, BlockedUserUncheckedCreateWithoutBlockerInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockerInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockerInput, BlockedUserUncheckedUpdateWithoutBlockerInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockerInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockerInput>
  }

  export type BlockedUserScalarWhereInput = {
    AND?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    OR?: BlockedUserScalarWhereInput[]
    NOT?: BlockedUserScalarWhereInput | BlockedUserScalarWhereInput[]
    id?: IntFilter<"BlockedUser"> | number
    blockerId?: IntFilter<"BlockedUser"> | number
    blockedId?: IntFilter<"BlockedUser"> | number
  }

  export type BlockedUserUpsertWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    update: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
    create: XOR<BlockedUserCreateWithoutBlockedInput, BlockedUserUncheckedCreateWithoutBlockedInput>
  }

  export type BlockedUserUpdateWithWhereUniqueWithoutBlockedInput = {
    where: BlockedUserWhereUniqueInput
    data: XOR<BlockedUserUpdateWithoutBlockedInput, BlockedUserUncheckedUpdateWithoutBlockedInput>
  }

  export type BlockedUserUpdateManyWithWhereWithoutBlockedInput = {
    where: BlockedUserScalarWhereInput
    data: XOR<BlockedUserUpdateManyMutationInput, BlockedUserUncheckedUpdateManyWithoutBlockedInput>
  }

  export type AdminBlockUpsertWithWhereUniqueWithoutUserInput = {
    where: AdminBlockWhereUniqueInput
    update: XOR<AdminBlockUpdateWithoutUserInput, AdminBlockUncheckedUpdateWithoutUserInput>
    create: XOR<AdminBlockCreateWithoutUserInput, AdminBlockUncheckedCreateWithoutUserInput>
  }

  export type AdminBlockUpdateWithWhereUniqueWithoutUserInput = {
    where: AdminBlockWhereUniqueInput
    data: XOR<AdminBlockUpdateWithoutUserInput, AdminBlockUncheckedUpdateWithoutUserInput>
  }

  export type AdminBlockUpdateManyWithWhereWithoutUserInput = {
    where: AdminBlockScalarWhereInput
    data: XOR<AdminBlockUpdateManyMutationInput, AdminBlockUncheckedUpdateManyWithoutUserInput>
  }

  export type AdminBlockScalarWhereInput = {
    AND?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
    OR?: AdminBlockScalarWhereInput[]
    NOT?: AdminBlockScalarWhereInput | AdminBlockScalarWhereInput[]
    id?: IntFilter<"AdminBlock"> | number
    userId?: IntFilter<"AdminBlock"> | number
    adminId?: IntFilter<"AdminBlock"> | number
    reason?: StringFilter<"AdminBlock"> | string
    duration?: StringFilter<"AdminBlock"> | string
    isActive?: BoolFilter<"AdminBlock"> | boolean
    startDate?: DateTimeFilter<"AdminBlock"> | Date | string
    endDate?: DateTimeNullableFilter<"AdminBlock"> | Date | string | null
    createdAt?: DateTimeFilter<"AdminBlock"> | Date | string
    updatedAt?: DateTimeFilter<"AdminBlock"> | Date | string
  }

  export type AdminBlockUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminBlockWhereUniqueInput
    update: XOR<AdminBlockUpdateWithoutAdminInput, AdminBlockUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminBlockCreateWithoutAdminInput, AdminBlockUncheckedCreateWithoutAdminInput>
  }

  export type AdminBlockUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminBlockWhereUniqueInput
    data: XOR<AdminBlockUpdateWithoutAdminInput, AdminBlockUncheckedUpdateWithoutAdminInput>
  }

  export type AdminBlockUpdateManyWithWhereWithoutAdminInput = {
    where: AdminBlockScalarWhereInput
    data: XOR<AdminBlockUpdateManyMutationInput, AdminBlockUncheckedUpdateManyWithoutAdminInput>
  }

  export type UserChatRoomUpsertWithWhereUniqueWithoutUserInput = {
    where: UserChatRoomWhereUniqueInput
    update: XOR<UserChatRoomUpdateWithoutUserInput, UserChatRoomUncheckedUpdateWithoutUserInput>
    create: XOR<UserChatRoomCreateWithoutUserInput, UserChatRoomUncheckedCreateWithoutUserInput>
  }

  export type UserChatRoomUpdateWithWhereUniqueWithoutUserInput = {
    where: UserChatRoomWhereUniqueInput
    data: XOR<UserChatRoomUpdateWithoutUserInput, UserChatRoomUncheckedUpdateWithoutUserInput>
  }

  export type UserChatRoomUpdateManyWithWhereWithoutUserInput = {
    where: UserChatRoomScalarWhereInput
    data: XOR<UserChatRoomUpdateManyMutationInput, UserChatRoomUncheckedUpdateManyWithoutUserInput>
  }

  export type UserChatRoomScalarWhereInput = {
    AND?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
    OR?: UserChatRoomScalarWhereInput[]
    NOT?: UserChatRoomScalarWhereInput | UserChatRoomScalarWhereInput[]
    userId?: IntFilter<"UserChatRoom"> | number
    chatRoomId?: IntFilter<"UserChatRoom"> | number
  }

  export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
    create: XOR<FriendCreateWithoutUserInput, FriendUncheckedCreateWithoutUserInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutUserInput, FriendUncheckedUpdateWithoutUserInput>
  }

  export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendScalarWhereInput = {
    AND?: FriendScalarWhereInput | FriendScalarWhereInput[]
    OR?: FriendScalarWhereInput[]
    NOT?: FriendScalarWhereInput | FriendScalarWhereInput[]
    userId?: IntFilter<"Friend"> | number
    friendId?: IntFilter<"Friend"> | number
  }

  export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    update: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendCreateWithoutFriendInput, FriendUncheckedCreateWithoutFriendInput>
  }

  export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendWhereUniqueInput
    data: XOR<FriendUpdateWithoutFriendInput, FriendUncheckedUpdateWithoutFriendInput>
  }

  export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: FriendScalarWhereInput
    data: XOR<FriendUpdateManyMutationInput, FriendUncheckedUpdateManyWithoutFriendInput>
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
    create: XOR<ChatRoomCreateWithoutCreatorInput, ChatRoomUncheckedCreateWithoutCreatorInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutCreatorInput, ChatRoomUncheckedUpdateWithoutCreatorInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutCreatorInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: IntFilter<"ChatRoom"> | number
    name?: StringFilter<"ChatRoom"> | string
    description?: StringNullableFilter<"ChatRoom"> | string | null
    isPrivate?: BoolFilter<"ChatRoom"> | boolean
    password?: StringNullableFilter<"ChatRoom"> | string | null
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    createdBy?: IntFilter<"ChatRoom"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    message?: StringFilter<"Message"> | string
    image?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    userId?: IntFilter<"Message"> | number
    chatRoomId?: IntFilter<"Message"> | number
  }

  export type MessageLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    update: XOR<MessageLikeUpdateWithoutUserInput, MessageLikeUncheckedUpdateWithoutUserInput>
    create: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput>
  }

  export type MessageLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    data: XOR<MessageLikeUpdateWithoutUserInput, MessageLikeUncheckedUpdateWithoutUserInput>
  }

  export type MessageLikeUpdateManyWithWhereWithoutUserInput = {
    where: MessageLikeScalarWhereInput
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageLikeScalarWhereInput = {
    AND?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
    OR?: MessageLikeScalarWhereInput[]
    NOT?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
    messageId?: IntFilter<"MessageLike"> | number
    userId?: IntFilter<"MessageLike"> | number
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutSenderInput, FriendRequestUncheckedUpdateWithoutSenderInput>
    create: XOR<FriendRequestCreateWithoutSenderInput, FriendRequestUncheckedCreateWithoutSenderInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutSenderInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutSenderInput, FriendRequestUncheckedUpdateWithoutSenderInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutSenderInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutSenderInput>
  }

  export type FriendRequestScalarWhereInput = {
    AND?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    OR?: FriendRequestScalarWhereInput[]
    NOT?: FriendRequestScalarWhereInput | FriendRequestScalarWhereInput[]
    id?: IntFilter<"FriendRequest"> | number
    senderId?: IntFilter<"FriendRequest"> | number
    receiverId?: IntFilter<"FriendRequest"> | number
    status?: StringFilter<"FriendRequest"> | string
    createdAt?: DateTimeFilter<"FriendRequest"> | Date | string
  }

  export type FriendRequestUpsertWithWhereUniqueWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput
    update: XOR<FriendRequestUpdateWithoutReceiverInput, FriendRequestUncheckedUpdateWithoutReceiverInput>
    create: XOR<FriendRequestCreateWithoutReceiverInput, FriendRequestUncheckedCreateWithoutReceiverInput>
  }

  export type FriendRequestUpdateWithWhereUniqueWithoutReceiverInput = {
    where: FriendRequestWhereUniqueInput
    data: XOR<FriendRequestUpdateWithoutReceiverInput, FriendRequestUncheckedUpdateWithoutReceiverInput>
  }

  export type FriendRequestUpdateManyWithWhereWithoutReceiverInput = {
    where: FriendRequestScalarWhereInput
    data: XOR<FriendRequestUpdateManyMutationInput, FriendRequestUncheckedUpdateManyWithoutReceiverInput>
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutUserInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutUserInput, PrivateMessageUncheckedUpdateWithoutUserInput>
    create: XOR<PrivateMessageCreateWithoutUserInput, PrivateMessageUncheckedCreateWithoutUserInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutUserInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutUserInput, PrivateMessageUncheckedUpdateWithoutUserInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutUserInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutUserInput>
  }

  export type PrivateMessageScalarWhereInput = {
    AND?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    OR?: PrivateMessageScalarWhereInput[]
    NOT?: PrivateMessageScalarWhereInput | PrivateMessageScalarWhereInput[]
    id?: IntFilter<"PrivateMessage"> | number
    message?: StringFilter<"PrivateMessage"> | string
    image?: StringNullableFilter<"PrivateMessage"> | string | null
    createdAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    updatedAt?: DateTimeFilter<"PrivateMessage"> | Date | string
    userId?: IntFilter<"PrivateMessage"> | number
    receiverId?: IntFilter<"PrivateMessage"> | number
    isRead?: BoolFilter<"PrivateMessage"> | boolean
  }

  export type PrivateMessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    update: XOR<PrivateMessageUpdateWithoutReceiverInput, PrivateMessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<PrivateMessageCreateWithoutReceiverInput, PrivateMessageUncheckedCreateWithoutReceiverInput>
  }

  export type PrivateMessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PrivateMessageWhereUniqueInput
    data: XOR<PrivateMessageUpdateWithoutReceiverInput, PrivateMessageUncheckedUpdateWithoutReceiverInput>
  }

  export type PrivateMessageUpdateManyWithWhereWithoutReceiverInput = {
    where: PrivateMessageScalarWhereInput
    data: XOR<PrivateMessageUpdateManyMutationInput, PrivateMessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type PrivateMessageLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PrivateMessageLikeWhereUniqueInput
    update: XOR<PrivateMessageLikeUpdateWithoutUserInput, PrivateMessageLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PrivateMessageLikeCreateWithoutUserInput, PrivateMessageLikeUncheckedCreateWithoutUserInput>
  }

  export type PrivateMessageLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PrivateMessageLikeWhereUniqueInput
    data: XOR<PrivateMessageLikeUpdateWithoutUserInput, PrivateMessageLikeUncheckedUpdateWithoutUserInput>
  }

  export type PrivateMessageLikeUpdateManyWithWhereWithoutUserInput = {
    where: PrivateMessageLikeScalarWhereInput
    data: XOR<PrivateMessageLikeUpdateManyMutationInput, PrivateMessageLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PrivateMessageLikeScalarWhereInput = {
    AND?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
    OR?: PrivateMessageLikeScalarWhereInput[]
    NOT?: PrivateMessageLikeScalarWhereInput | PrivateMessageLikeScalarWhereInput[]
    privateMessageId?: IntFilter<"PrivateMessageLike"> | number
    userId?: IntFilter<"PrivateMessageLike"> | number
  }

  export type UserCreateWithoutPushSubscriptionsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPushSubscriptionsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPushSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
  }

  export type UserUpsertWithoutPushSubscriptionsInput = {
    update: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
    create: XOR<UserCreateWithoutPushSubscriptionsInput, UserUncheckedCreateWithoutPushSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPushSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPushSubscriptionsInput, UserUncheckedUpdateWithoutPushSubscriptionsInput>
  }

  export type UserUpdateWithoutPushSubscriptionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPushSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAdminBlocksInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminBlocksInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminBlocksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminBlocksInput, UserUncheckedCreateWithoutAdminBlocksInput>
  }

  export type UserCreateWithoutBlocksAdministeredInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlocksAdministeredInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlocksAdministeredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlocksAdministeredInput, UserUncheckedCreateWithoutBlocksAdministeredInput>
  }

  export type UserUpsertWithoutAdminBlocksInput = {
    update: XOR<UserUpdateWithoutAdminBlocksInput, UserUncheckedUpdateWithoutAdminBlocksInput>
    create: XOR<UserCreateWithoutAdminBlocksInput, UserUncheckedCreateWithoutAdminBlocksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminBlocksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminBlocksInput, UserUncheckedUpdateWithoutAdminBlocksInput>
  }

  export type UserUpdateWithoutAdminBlocksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBlocksAdministeredInput = {
    update: XOR<UserUpdateWithoutBlocksAdministeredInput, UserUncheckedUpdateWithoutBlocksAdministeredInput>
    create: XOR<UserCreateWithoutBlocksAdministeredInput, UserUncheckedCreateWithoutBlocksAdministeredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlocksAdministeredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlocksAdministeredInput, UserUncheckedUpdateWithoutBlocksAdministeredInput>
  }

  export type UserUpdateWithoutBlocksAdministeredInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlocksAdministeredInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBlockedUsersInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedUsersInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
  }

  export type UserCreateWithoutBlockedByInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBlockedByInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBlockedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
  }

  export type UserUpsertWithoutBlockedUsersInput = {
    update: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
    create: XOR<UserCreateWithoutBlockedUsersInput, UserUncheckedCreateWithoutBlockedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedUsersInput, UserUncheckedUpdateWithoutBlockedUsersInput>
  }

  export type UserUpdateWithoutBlockedUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutBlockedByInput = {
    update: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
    create: XOR<UserCreateWithoutBlockedByInput, UserUncheckedCreateWithoutBlockedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBlockedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBlockedByInput, UserUncheckedUpdateWithoutBlockedByInput>
  }

  export type UserUpdateWithoutBlockedByInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBlockedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageLikeCreateWithoutMessageInput = {
    user: UserCreateNestedOneWithoutLikedMessagesInput
  }

  export type MessageLikeUncheckedCreateWithoutMessageInput = {
    userId: number
  }

  export type MessageLikeCreateOrConnectWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    create: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput>
  }

  export type MessageLikeCreateManyMessageInputEnvelope = {
    data: MessageLikeCreateManyMessageInput | MessageLikeCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutMessagesInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatRoomCreateWithoutMessagesInput = {
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedChatRoomsInput
    users?: UserChatRoomCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    users?: UserChatRoomUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutMessagesInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
  }

  export type MessageLikeUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    update: XOR<MessageLikeUpdateWithoutMessageInput, MessageLikeUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput>
  }

  export type MessageLikeUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    data: XOR<MessageLikeUpdateWithoutMessageInput, MessageLikeUncheckedUpdateWithoutMessageInput>
  }

  export type MessageLikeUpdateManyWithWhereWithoutMessageInput = {
    where: MessageLikeScalarWhereInput
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyWithoutMessageInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatRoomUpsertWithoutMessagesInput = {
    update: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatRoomCreateWithoutMessagesInput, ChatRoomUncheckedCreateWithoutMessagesInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessagesInput, ChatRoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatRoomUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput
    users?: UserChatRoomUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    users?: UserChatRoomUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type MessageCreateWithoutLikesInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    chatRoom: ChatRoomCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutLikesInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    chatRoomId: number
  }

  export type MessageCreateOrConnectWithoutLikesInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutLikesInput, MessageUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikedMessagesInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedMessagesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedMessagesInput, UserUncheckedCreateWithoutLikedMessagesInput>
  }

  export type MessageUpsertWithoutLikesInput = {
    update: XOR<MessageUpdateWithoutLikesInput, MessageUncheckedUpdateWithoutLikesInput>
    create: XOR<MessageCreateWithoutLikesInput, MessageUncheckedCreateWithoutLikesInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutLikesInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutLikesInput, MessageUncheckedUpdateWithoutLikesInput>
  }

  export type MessageUpdateWithoutLikesInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutLikedMessagesInput = {
    update: XOR<UserUpdateWithoutLikedMessagesInput, UserUncheckedUpdateWithoutLikedMessagesInput>
    create: XOR<UserCreateWithoutLikedMessagesInput, UserUncheckedCreateWithoutLikedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedMessagesInput, UserUncheckedUpdateWithoutLikedMessagesInput>
  }

  export type UserUpdateWithoutLikedMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrivateMessageLikeCreateWithoutPrivateMessageInput = {
    user: UserCreateNestedOneWithoutLikedPrivateMessagesInput
  }

  export type PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput = {
    userId: number
  }

  export type PrivateMessageLikeCreateOrConnectWithoutPrivateMessageInput = {
    where: PrivateMessageLikeWhereUniqueInput
    create: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput>
  }

  export type PrivateMessageLikeCreateManyPrivateMessageInputEnvelope = {
    data: PrivateMessageLikeCreateManyPrivateMessageInput | PrivateMessageLikeCreateManyPrivateMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutSentMessagesInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type PrivateMessageLikeUpsertWithWhereUniqueWithoutPrivateMessageInput = {
    where: PrivateMessageLikeWhereUniqueInput
    update: XOR<PrivateMessageLikeUpdateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedUpdateWithoutPrivateMessageInput>
    create: XOR<PrivateMessageLikeCreateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedCreateWithoutPrivateMessageInput>
  }

  export type PrivateMessageLikeUpdateWithWhereUniqueWithoutPrivateMessageInput = {
    where: PrivateMessageLikeWhereUniqueInput
    data: XOR<PrivateMessageLikeUpdateWithoutPrivateMessageInput, PrivateMessageLikeUncheckedUpdateWithoutPrivateMessageInput>
  }

  export type PrivateMessageLikeUpdateManyWithWhereWithoutPrivateMessageInput = {
    where: PrivateMessageLikeScalarWhereInput
    data: XOR<PrivateMessageLikeUpdateManyMutationInput, PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PrivateMessageCreateWithoutLikesInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isRead?: boolean
    user: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type PrivateMessageUncheckedCreateWithoutLikesInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    receiverId: number
    isRead?: boolean
  }

  export type PrivateMessageCreateOrConnectWithoutLikesInput = {
    where: PrivateMessageWhereUniqueInput
    create: XOR<PrivateMessageCreateWithoutLikesInput, PrivateMessageUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikedPrivateMessagesInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutLikedPrivateMessagesInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutLikedPrivateMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPrivateMessagesInput, UserUncheckedCreateWithoutLikedPrivateMessagesInput>
  }

  export type PrivateMessageUpsertWithoutLikesInput = {
    update: XOR<PrivateMessageUpdateWithoutLikesInput, PrivateMessageUncheckedUpdateWithoutLikesInput>
    create: XOR<PrivateMessageCreateWithoutLikesInput, PrivateMessageUncheckedCreateWithoutLikesInput>
    where?: PrivateMessageWhereInput
  }

  export type PrivateMessageUpdateToOneWithWhereWithoutLikesInput = {
    where?: PrivateMessageWhereInput
    data: XOR<PrivateMessageUpdateWithoutLikesInput, PrivateMessageUncheckedUpdateWithoutLikesInput>
  }

  export type PrivateMessageUpdateWithoutLikesInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutLikedPrivateMessagesInput = {
    update: XOR<UserUpdateWithoutLikedPrivateMessagesInput, UserUncheckedUpdateWithoutLikedPrivateMessagesInput>
    create: XOR<UserCreateWithoutLikedPrivateMessagesInput, UserUncheckedCreateWithoutLikedPrivateMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedPrivateMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedPrivateMessagesInput, UserUncheckedUpdateWithoutLikedPrivateMessagesInput>
  }

  export type UserUpdateWithoutLikedPrivateMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPrivateMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutCreatedChatRoomsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedChatRoomsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
  }

  export type UserChatRoomCreateWithoutChatRoomInput = {
    user: UserCreateNestedOneWithoutChatRoomsInput
  }

  export type UserChatRoomUncheckedCreateWithoutChatRoomInput = {
    userId: number
  }

  export type UserChatRoomCreateOrConnectWithoutChatRoomInput = {
    where: UserChatRoomWhereUniqueInput
    create: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput>
  }

  export type UserChatRoomCreateManyChatRoomInputEnvelope = {
    data: UserChatRoomCreateManyChatRoomInput | UserChatRoomCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutChatRoomInput = {
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: MessageLikeCreateNestedManyWithoutMessageInput
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutChatRoomInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    likes?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type MessageCreateOrConnectWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
  }

  export type MessageCreateManyChatRoomInputEnvelope = {
    data: MessageCreateManyChatRoomInput | MessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedChatRoomsInput = {
    update: XOR<UserUpdateWithoutCreatedChatRoomsInput, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
    create: XOR<UserCreateWithoutCreatedChatRoomsInput, UserUncheckedCreateWithoutCreatedChatRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedChatRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedChatRoomsInput, UserUncheckedUpdateWithoutCreatedChatRoomsInput>
  }

  export type UserUpdateWithoutCreatedChatRoomsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserChatRoomUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: UserChatRoomWhereUniqueInput
    update: XOR<UserChatRoomUpdateWithoutChatRoomInput, UserChatRoomUncheckedUpdateWithoutChatRoomInput>
    create: XOR<UserChatRoomCreateWithoutChatRoomInput, UserChatRoomUncheckedCreateWithoutChatRoomInput>
  }

  export type UserChatRoomUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: UserChatRoomWhereUniqueInput
    data: XOR<UserChatRoomUpdateWithoutChatRoomInput, UserChatRoomUncheckedUpdateWithoutChatRoomInput>
  }

  export type UserChatRoomUpdateManyWithWhereWithoutChatRoomInput = {
    where: UserChatRoomScalarWhereInput
    data: XOR<UserChatRoomUpdateManyMutationInput, UserChatRoomUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<MessageCreateWithoutChatRoomInput, MessageUncheckedCreateWithoutChatRoomInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatRoomInput, MessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type UserCreateWithoutChatRoomsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatRoomsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
  }

  export type ChatRoomCreateWithoutUsersInput = {
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedChatRoomsInput
    messages?: MessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutUsersInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutUsersInput, ChatRoomUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutChatRoomsInput = {
    update: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
    create: XOR<UserCreateWithoutChatRoomsInput, UserUncheckedCreateWithoutChatRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatRoomsInput, UserUncheckedUpdateWithoutChatRoomsInput>
  }

  export type UserUpdateWithoutChatRoomsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatRoomUpsertWithoutUsersInput = {
    update: XOR<ChatRoomUpdateWithoutUsersInput, ChatRoomUncheckedUpdateWithoutUsersInput>
    create: XOR<ChatRoomCreateWithoutUsersInput, ChatRoomUncheckedCreateWithoutUsersInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutUsersInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutUsersInput, ChatRoomUncheckedUpdateWithoutUsersInput>
  }

  export type ChatRoomUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedChatRoomsNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type UserCreateWithoutFriendsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSentFriendRequestsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    receivedFriendRequests?: FriendRequestCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentFriendRequestsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    receivedFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutReceiverInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
  }

  export type UserCreateWithoutReceivedFriendRequestsInput = {
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomCreateNestedManyWithoutUserInput
    friends?: FriendCreateNestedManyWithoutUserInput
    friendOf?: FriendCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomCreateNestedManyWithoutCreatorInput
    messages?: MessageCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestCreateNestedManyWithoutSenderInput
    sentMessages?: PrivateMessageCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedFriendRequestsInput = {
    id?: number
    createdAt?: Date | string
    email: string
    password: string
    username: string
    bio?: string | null
    profileImage?: string
    notification?: string
    role?: $Enums.Role
    sex?: $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedCreateNestedManyWithoutUserInput
    blockedUsers?: BlockedUserUncheckedCreateNestedManyWithoutBlockerInput
    blockedBy?: BlockedUserUncheckedCreateNestedManyWithoutBlockedInput
    adminBlocks?: AdminBlockUncheckedCreateNestedManyWithoutUserInput
    blocksAdministered?: AdminBlockUncheckedCreateNestedManyWithoutAdminInput
    chatRooms?: UserChatRoomUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendUncheckedCreateNestedManyWithoutUserInput
    friendOf?: FriendUncheckedCreateNestedManyWithoutFriendInput
    createdChatRooms?: ChatRoomUncheckedCreateNestedManyWithoutCreatorInput
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
    likedMessages?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    sentFriendRequests?: FriendRequestUncheckedCreateNestedManyWithoutSenderInput
    sentMessages?: PrivateMessageUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: PrivateMessageUncheckedCreateNestedManyWithoutReceiverInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedFriendRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpsertWithoutSentFriendRequestsInput = {
    update: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
    create: XOR<UserCreateWithoutSentFriendRequestsInput, UserUncheckedCreateWithoutSentFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentFriendRequestsInput, UserUncheckedUpdateWithoutSentFriendRequestsInput>
  }

  export type UserUpdateWithoutSentFriendRequestsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    receivedFriendRequests?: FriendRequestUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentFriendRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    receivedFriendRequests?: FriendRequestUncheckedUpdateManyWithoutReceiverNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedFriendRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
    create: XOR<UserCreateWithoutReceivedFriendRequestsInput, UserUncheckedCreateWithoutReceivedFriendRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedFriendRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedFriendRequestsInput, UserUncheckedUpdateWithoutReceivedFriendRequestsInput>
  }

  export type UserUpdateWithoutReceivedFriendRequestsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUpdateManyWithoutUserNestedInput
    friends?: FriendUpdateManyWithoutUserNestedInput
    friendOf?: FriendUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUpdateManyWithoutCreatorNestedInput
    messages?: MessageUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUpdateManyWithoutSenderNestedInput
    sentMessages?: PrivateMessageUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedFriendRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profileImage?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    pushSubscriptions?: PushSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    blockedUsers?: BlockedUserUncheckedUpdateManyWithoutBlockerNestedInput
    blockedBy?: BlockedUserUncheckedUpdateManyWithoutBlockedNestedInput
    adminBlocks?: AdminBlockUncheckedUpdateManyWithoutUserNestedInput
    blocksAdministered?: AdminBlockUncheckedUpdateManyWithoutAdminNestedInput
    chatRooms?: UserChatRoomUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: FriendUncheckedUpdateManyWithoutFriendNestedInput
    createdChatRooms?: ChatRoomUncheckedUpdateManyWithoutCreatorNestedInput
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
    likedMessages?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    sentFriendRequests?: FriendRequestUncheckedUpdateManyWithoutSenderNestedInput
    sentMessages?: PrivateMessageUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: PrivateMessageUncheckedUpdateManyWithoutReceiverNestedInput
    likedPrivateMessages?: PrivateMessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PushSubscriptionCreateManyUserInput = {
    id?: number
    endpoint: string
    endpointHash: string
    p256dh: string
    auth: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlockedUserCreateManyBlockerInput = {
    id?: number
    blockedId: number
  }

  export type BlockedUserCreateManyBlockedInput = {
    id?: number
    blockerId: number
  }

  export type AdminBlockCreateManyUserInput = {
    id?: number
    adminId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminBlockCreateManyAdminInput = {
    id?: number
    userId: number
    reason: string
    duration: string
    isActive?: boolean
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserChatRoomCreateManyUserInput = {
    chatRoomId: number
  }

  export type FriendCreateManyUserInput = {
    friendId: number
  }

  export type FriendCreateManyFriendInput = {
    userId: number
  }

  export type ChatRoomCreateManyCreatorInput = {
    id?: number
    name: string
    description?: string | null
    isPrivate?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyUserInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatRoomId: number
  }

  export type MessageLikeCreateManyUserInput = {
    messageId: number
  }

  export type FriendRequestCreateManySenderInput = {
    id?: number
    receiverId: number
    status?: string
    createdAt?: Date | string
  }

  export type FriendRequestCreateManyReceiverInput = {
    id?: number
    senderId: number
    status?: string
    createdAt?: Date | string
  }

  export type PrivateMessageCreateManyUserInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverId: number
    isRead?: boolean
  }

  export type PrivateMessageCreateManyReceiverInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    isRead?: boolean
  }

  export type PrivateMessageLikeCreateManyUserInput = {
    privateMessageId: number
  }

  export type PushSubscriptionUpdateWithoutUserInput = {
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PushSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    endpoint?: StringFieldUpdateOperationsInput | string
    endpointHash?: StringFieldUpdateOperationsInput | string
    p256dh?: StringFieldUpdateOperationsInput | string
    auth?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockedUserUpdateWithoutBlockerInput = {
    blocked?: UserUpdateOneRequiredWithoutBlockedByNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockerInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockedId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockerInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockedId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockedUserUpdateWithoutBlockedInput = {
    blocker?: UserUpdateOneRequiredWithoutBlockedUsersNestedInput
  }

  export type BlockedUserUncheckedUpdateWithoutBlockedInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockerId?: IntFieldUpdateOperationsInput | number
  }

  export type BlockedUserUncheckedUpdateManyWithoutBlockedInput = {
    id?: IntFieldUpdateOperationsInput | number
    blockerId?: IntFieldUpdateOperationsInput | number
  }

  export type AdminBlockUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutBlocksAdministeredNestedInput
  }

  export type AdminBlockUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockUpdateWithoutAdminInput = {
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminBlocksNestedInput
  }

  export type AdminBlockUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminBlockUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserChatRoomUpdateWithoutUserInput = {
    chatRoom?: ChatRoomUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserChatRoomUncheckedUpdateWithoutUserInput = {
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type UserChatRoomUncheckedUpdateManyWithoutUserInput = {
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUpdateWithoutUserInput = {
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type FriendUncheckedUpdateWithoutUserInput = {
    friendId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyWithoutUserInput = {
    friendId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUpdateWithoutFriendInput = {
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendUncheckedUpdateWithoutFriendInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendUncheckedUpdateManyWithoutFriendInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatRoomUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserChatRoomUpdateManyWithoutChatRoomNestedInput
    messages?: MessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserChatRoomUncheckedUpdateManyWithoutChatRoomNestedInput
    messages?: MessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: MessageLikeUpdateManyWithoutMessageNestedInput
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoomId?: IntFieldUpdateOperationsInput | number
    likes?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoomId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUpdateWithoutUserInput = {
    message?: MessageUpdateOneRequiredWithoutLikesNestedInput
  }

  export type MessageLikeUncheckedUpdateWithoutUserInput = {
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyWithoutUserInput = {
    messageId?: IntFieldUpdateOperationsInput | number
  }

  export type FriendRequestUpdateWithoutSenderInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UserUpdateOneRequiredWithoutReceivedFriendRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUpdateWithoutReceiverInput = {
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentFriendRequestsNestedInput
  }

  export type FriendRequestUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendRequestUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateMessageUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUpdateManyWithoutPrivateMessageNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageNestedInput
  }

  export type PrivateMessageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageUpdateWithoutReceiverInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUpdateManyWithoutPrivateMessageNestedInput
    user?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type PrivateMessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
    likes?: PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageNestedInput
  }

  export type PrivateMessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrivateMessageLikeUpdateWithoutUserInput = {
    privateMessage?: PrivateMessageUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PrivateMessageLikeUncheckedUpdateWithoutUserInput = {
    privateMessageId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageLikeUncheckedUpdateManyWithoutUserInput = {
    privateMessageId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateManyMessageInput = {
    userId: number
  }

  export type MessageLikeUpdateWithoutMessageInput = {
    user?: UserUpdateOneRequiredWithoutLikedMessagesNestedInput
  }

  export type MessageLikeUncheckedUpdateWithoutMessageInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyWithoutMessageInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageLikeCreateManyPrivateMessageInput = {
    userId: number
  }

  export type PrivateMessageLikeUpdateWithoutPrivateMessageInput = {
    user?: UserUpdateOneRequiredWithoutLikedPrivateMessagesNestedInput
  }

  export type PrivateMessageLikeUncheckedUpdateWithoutPrivateMessageInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PrivateMessageLikeUncheckedUpdateManyWithoutPrivateMessageInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserChatRoomCreateManyChatRoomInput = {
    userId: number
  }

  export type MessageCreateManyChatRoomInput = {
    id?: number
    message: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserChatRoomUpdateWithoutChatRoomInput = {
    user?: UserUpdateOneRequiredWithoutChatRoomsNestedInput
  }

  export type UserChatRoomUncheckedUpdateWithoutChatRoomInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserChatRoomUncheckedUpdateManyWithoutChatRoomInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutChatRoomInput = {
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: MessageLikeUpdateManyWithoutMessageNestedInput
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    likes?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}