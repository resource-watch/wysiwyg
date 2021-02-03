

// Visual Blocks
import TextBlock from 'components/Wysiwyg/Blocks/Text';
import ImageBlock from 'components/Wysiwyg/Blocks/Image';
import VideoBlock from 'components/Wysiwyg/Blocks/Video';
import EmbedBlock from 'components/Wysiwyg/Blocks/Embed';
import GridBlock from 'components/Wysiwyg/Blocks/Grid';

// Edition Blocks
import ImageBlockEdition from 'components/Wysiwyg/Blocks/Edition/ImageEdition';
import VideoBlockEdition from 'components/Wysiwyg/Blocks/Edition/VideoEdition';
import EmbedBlockEdition from 'components/Wysiwyg/Blocks/Edition/EmbedEdition';
import GridBlockEdition from 'components/Wysiwyg/Blocks/Edition/GridEdition';

// Form
import { Text } from 'react-form';
import { File } from 'components/Wysiwyg/Form';

const DEFAULT_BLOCKS = {
  text: {
    Component: TextBlock,
    // Placeholder
    placeholder: 'Type your text',
    theme: 'bubble',
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link']
      ]
    }
  },

  image: {
    Component: ImageBlock,
    EditionComponent: ImageBlockEdition,
    renderer: 'tooltip',
    model: {
      src: {
        Component: File,
        id: 'src',
        label: 'Src',
        validations: {
          presence: { allowEmpty: false },
          url: true
        },
        options: {
          // https://react-dropzone.netlify.com/#proptypes
          multiple: false,
          disableClick: true,
          disablePreview: true,
          maxSize: 1000000,
          accept: ['image/jpeg', 'image/png', 'image/gif']
        }
      },
      alt: {
        Component: Text,
        id: 'alt',
        label: 'Alt',
        validations: {
          presence: { allowEmpty: false }
        }
      }
    },

    options: {
    }
  },

  video: {
    Component: VideoBlock,
    EditionComponent: VideoBlockEdition,
    renderer: 'tooltip',
    model: {
      url: {
        Component: Text,
        id: 'url',
        label: 'Url',
        validations: {
          presence: { allowEmpty: false },
          url: true
        }
      }
    },

    // react player props
    // https://github.com/CookPete/react-player#props
    options: {
      controls: true,
      width: '100%'
    }
  },

  embed: {
    Component: EmbedBlock,
    EditionComponent: EmbedBlockEdition,
    renderer: 'tooltip',
    model: {
      src: {
        Component: Text,
        id: 'src',
        label: 'Src',
        validations: {
          presence: { allowEmpty: false },
          url: true
        }
      },
      height: {
        Component: Text,
        id: 'height',
        label: 'Height',
        defaultValue: 400,
        inputProps: {
          min: 300,
          type: 'number'
        },
        validations: {
          presence: { allowEmpty: false }
        }
      }
    },

    options: {
    }
  },

  grid: {
    Component: GridBlock,
    EditionComponent: GridBlockEdition,
    renderer: 'tooltip',
    model: {
      // columns: {
      //   type: 'select',
      //   id: 'columns',
      //   label: 'Columns',
      //   defaultValue: 2,
      //   options: [
      //     { label: 2, value: 2 },
      //     { label: 3, value: 3 }
      //   ],
      //   validations: {
      //     presence: { allowEmpty: false }
      //   }
      // }
    },

    options: {
    }
  }
};

export { DEFAULT_BLOCKS };
