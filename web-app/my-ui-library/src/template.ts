import { VNode } from 'snabbdom';

type TemplateFunction = (state: any) => VNode;

export function createTemplate(templateFn: TemplateFunction) {
  return templateFn;
}