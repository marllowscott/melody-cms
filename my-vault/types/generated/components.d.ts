import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GeneralNavlink extends Struct.ComponentSchema {
  collectionName: 'components_general_navlinks';
  info: {
    displayName: 'Navlink';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNumber extends Struct.ComponentSchema {
  collectionName: 'components_sections_numbers';
  info: {
    displayName: 'Number';
  };
  attributes: {
    description: Schema.Attribute.Text;
    numberItems: Schema.Attribute.Component<'sections.number-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsNumberItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_number_items';
  info: {
    displayName: 'Number Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTextCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_cards';
  info: {
    displayName: 'Text Card';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_images';
  info: {
    displayName: 'Text Image';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.button': GeneralButton;
      'general.navlink': GeneralNavlink;
      'sections.card': SectionsCard;
      'sections.number': SectionsNumber;
      'sections.number-item': SectionsNumberItem;
      'sections.text-card': SectionsTextCard;
      'sections.text-image': SectionsTextImage;
    }
  }
}
