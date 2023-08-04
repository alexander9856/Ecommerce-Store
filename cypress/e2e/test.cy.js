describe('e2e tests', () => {
    //nav
    it('render', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Watches').should('have.class', 'css-1es8i75');
        cy.contains('Shoes');
        cy.contains('Clothes');
        cy.contains('Bags');

        cy.get('.css-1toxed2').click()
        cy.contains('Profile')
        cy.contains('Cart')
        cy.contains('Logout')

        // name/ x out of y   //     sort/filter menu 
        cy.contains('watches');
        cy.contains('20 / 40 products');
        cy.contains('Open Filter');
        cy.contains('Sort by');

        // item card

        cy.contains('Garmin DESCENT™ MK2S');
        cy.contains('SPORT');
        cy.contains('132.00');
        cy.contains('15 reviews');
        cy.contains('Add to Card').click();
        cy.contains('Garmin DESCENT™ MK2S added to cart.')

        // click load more
        cy.contains('Load More').click()
        cy.contains('40 / 40 products')
        cy.get('Load More').should('not.exist');


        // go to shoes page
        cy.contains('Shoes').click()
        cy.contains('Shoes').should('have.class', 'css-1es8i75');
        cy.contains('20 / 28 products');
        cy.contains('Nike React Infinity Run');
        cy.contains('RUNNING');

        // go to clothes page
        cy.contains('Clothes').click()
        cy.contains('Clothes').should('have.class', 'css-1es8i75');
        cy.contains('20 / 40 products');
        cy.contains('PROUD HOODIE UNISEX');
        cy.contains('SPORT');

        // go to Bags page
        cy.contains('Bags').click()
        cy.contains('Bags').should('have.class', 'css-1es8i75');
        cy.contains('20 / 42 products');
        cy.contains('COMME DES GARÇONS HAND BAG');
        cy.contains('CLASSIC');

        // open sort
        cy.contains('Sort by').click();
        cy.contains('A - Z')
        cy.contains('Z - A')
        cy.contains('Price Descending')
        cy.contains('Price Ascending')

        // click A-Z
        cy.contains('A - Z').click();
        cy.get('.css-gmuwbf').first().contains('ADIDAS ARCHIVE TOPLOADER')

        // click Z - A
        cy.contains('A - Z').click();
        cy.contains('Z - A').click();
        cy.get('.css-gmuwbf').first().contains('XTI Nude')

        // click Price Descending
        cy.contains('Z - A').click();
        cy.contains('Price Descending').click();
        cy.get('.css-gmuwbf').first().contains('SPRANDI SPR-M-004-S23')

        // click Price Ascending
        cy.contains('Price Descending').click();
        cy.contains('Price Ascending').click();
        cy.get('.css-gmuwbf').first().contains('DESIGUAL 23SAKP23 1001');

        // filter

        cy.contains('Open Filter').click();
        cy.contains('Pink');
        cy.contains('Black');
        cy.contains('Blue');
        cy.contains('Brown');
        cy.contains('Yellow');
        cy.contains('White');
        cy.contains('Grey');
        cy.contains('Golden');
        cy.contains('Purple');
        cy.contains('Green');

        cy.contains('Price between :')
        cy.get('.css-1g0mrv8').first().invoke('val').should('eq', '€0')
        cy.get('.css-1g0mrv8').last().invoke('val').should('eq', '€890')
        cy.contains('Pink').click();
        cy.get('.css-1g0mrv8').last().clear().type('380')
        cy.contains('See Results').click()
        cy.contains('XTI Nude')
        cy.contains('BIBI Quartzo')
        cy.contains('LOVE MOSCHINO BAG')
        cy.contains('COMME DES GARÇONS HAND BAG')
        cy.contains('EASTPAK SPRINGER')
        cy.contains('5 / 5 products')

        //footer

        cy.contains('About Us')
        cy.contains('Blog')
        cy.contains('Careers')
        cy.contains('Contact Us')
        cy.contains('Support')
        cy.contains('Help Center')
        cy.contains('Safety Center')
        cy.contains('Community Guidelines')
        cy.contains('Legal')
        cy.contains('Cookies Policy')
        cy.contains('Privacy Policy')
        cy.contains('Terms of Service')
        cy.contains('Law Enforcement')
        cy.contains('ShopNexus')
        cy.contains('©All rights reserved.')

    });

});
