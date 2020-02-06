// @flow
export type ReduxAction<A, P> = {
  type: A,
  payload: P,
}

type $MapValues<O: Object, Fn> = $Values<$ObjMap<O, Fn>>;
type $ExtractAction = <A, D>(action: A) => $Call<A, D>;
export type ExtractActionTypes<A> = $MapValues<A, $ExtractAction>;
