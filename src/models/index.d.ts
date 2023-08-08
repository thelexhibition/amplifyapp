import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSIGNALS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SIGNALS, 'id'>;
  };
  readonly id: string;
  readonly datetime?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly assignee?: string | null;
  readonly group?: string | null;
  readonly workflow?: boolean | null;
  readonly chart_data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySIGNALS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SIGNALS, 'id'>;
  };
  readonly id: string;
  readonly datetime?: string | null;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly assignee?: string | null;
  readonly group?: string | null;
  readonly workflow?: boolean | null;
  readonly chart_data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SIGNALS = LazyLoading extends LazyLoadingDisabled ? EagerSIGNALS : LazySIGNALS

export declare const SIGNALS: (new (init: ModelInit<SIGNALS>) => SIGNALS) & {
  copyOf(source: SIGNALS, mutator: (draft: MutableModel<SIGNALS>) => MutableModel<SIGNALS> | void): SIGNALS;
}