const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;

registerPlugin( 'prefix-gutenberg-sidebar', {
    icon: 'smiley',
    render: () => {
        return (
            <>
                <PluginSidebar
                    name="prefix-gutenberg-sidebar"
                    title= { 'A title' } >
                        Sidebar Content.
                </PluginSidebar>
            </>
        )
    }
} );