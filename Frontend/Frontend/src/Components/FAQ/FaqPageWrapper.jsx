import React, { useState, Suspense } from 'react';
const FAQPageLazy = React.lazy(() => import('./Faq'));

const FAQPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FAQPageLazy />
        </Suspense>
    );
};

export default FAQPageWrapper;
