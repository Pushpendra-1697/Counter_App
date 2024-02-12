type EffectCallback = () => void;
type DependencyList = any[];

export function useEffect(effect: EffectCallback, deps: DependencyList) {
  effect();
}