import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralButton extends Struct.ComponentSchema {
  collectionName: 'components_general_buttons';
  info: {
    description: 'Call-to-action button with text and link';
    displayName: 'Button';
  };
  attributes: {
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    link: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/contact'>;
    opensInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Click Here'>;
  };
}

export interface GeneralNavlink extends Struct.ComponentSchema {
  collectionName: 'components_general_navlinks';
  info: {
    description: 'Navigation link with label text and href path';
    displayName: 'Navlink';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/'>;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Home'>;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    description: 'About section with image, title, descriptions, and button';
    displayName: 'About Section';
  };
  attributes: {
    bulletPoints: Schema.Attribute.JSON;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    description: 'Individual card with title, description, icon and optional link';
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_section_feature_items';
  info: {
    description: 'Individual feature item with title and description';
    displayName: 'Feature Item';
    pluralName: 'feature-items';
    singularName: 'feature-item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
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

export interface SectionsOutcomeItem extends Struct.ComponentSchema {
  collectionName: 'components_outcome_items';
  info: {
    description: 'Individual outcome item with icon, title, and description';
    displayName: 'Outcome Item';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description text'>;
    icon: Schema.Attribute.Enumeration<
      ['ClarityIcon', 'ConfidenceIcon', 'ConnectionIcon']
    > &
      Schema.Attribute.DefaultTo<'ClarityIcon'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface SectionsProcessItem extends Struct.ComponentSchema {
  collectionName: 'components_process_items';
  info: {
    description: 'Individual delivery format item with title and description';
    displayName: 'Process Item';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description text'>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Title'>;
  };
}

export interface SectionsService extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    description: 'Service offering with title, description, icon and optional link';
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    description: 'Client testimonial with quote, name, title, and optional avatar image';
    displayName: 'Testimonial';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    sectionSubtitle: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
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
    description: 'Section with text on one side and image on the other';
    displayName: 'Text Image';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsValuesItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_items';
  info: {
    description: 'Strategic outcome item with title and description';
    displayName: 'Values Item';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Description of the strategic outcome'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Strategic Outcome Title'>;
  };
}

export interface SectionsValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_values_sections';
  info: {
    description: 'Section with subtitle, title, and repeatable outcome items';
    displayName: 'Values Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'sections.values-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 10;
          min: 1;
        },
        number
      >;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'STRATEGIC OUTCOMES'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What We Achieve'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.button': GeneralButton;
      'general.navlink': GeneralNavlink;
      'sections.about-section': SectionsAboutSection;
      'sections.card': SectionsCard;
      'sections.feature-item': SectionsFeatureItem;
      'sections.number': SectionsNumber;
      'sections.number-item': SectionsNumberItem;
      'sections.outcome-item': SectionsOutcomeItem;
      'sections.process-item': SectionsProcessItem;
      'sections.service': SectionsService;
      'sections.testimonial': SectionsTestimonial;
      'sections.text-card': SectionsTextCard;
      'sections.text-image': SectionsTextImage;
      'sections.values-item': SectionsValuesItem;
      'sections.values-section': SectionsValuesSection;
    }
  }
}
