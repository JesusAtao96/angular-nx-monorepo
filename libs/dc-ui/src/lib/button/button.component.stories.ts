import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'common/button',
  component: ButtonComponent,
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    text: text('text', 'Click me!'),
    style: select(
      'style',
      {
        default: 'default',
        primary: 'primary',
        danger: 'danger',
        warning: 'warning',
      },
      'default'
    ),
    visible: boolean('visible', true),
    clicked: action('✨ Clicked')
  }
})

/* export const secondary = () => ({
  moduleMetadata: {
    imports: []
  },
  props: {
    text: text('text', 'Haz click aqui!'),
    style: text('style', 'warning'),
  }
}) */
