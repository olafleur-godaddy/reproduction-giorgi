import { ComplementaryArea } from '@wordpress/interface';
import { registerPlugin } from '@wordpress/plugins';

registerPlugin( 'prefix-gutenberg-sidebar', {
    icon: 'smiley',
    render: () => {
        return (
            <>
                <ComplementaryArea
                    icon='smiley'
                    identifier={ 'fun-complementary-area' }
                    scope="core/edit-post"
                    smallScreenTitle={ 'Small scren title' }
                    title={ 'Title' }>
                            Yo
                </ComplementaryArea>
            </>
        )
    }
} );