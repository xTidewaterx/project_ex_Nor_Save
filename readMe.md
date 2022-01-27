
carousel :: 
we can use an if else function with many checks, to check that certain things are in place for it to check for next image, if click right and user is on image 4, that means, transition to image 5, we can then have image 4 fade out to the side, and image 5 fade in frmo the other side 
carousel, also use degreees on slashes to create arrows in css, use straight lines with degrees. 

 STOP::


 COLUMNS::

 we have a container that contains 3 divs of the same name (different name than container), the container is named grid, cause it is now a grid with these divs in it, we have nothing in our column div, no styling, the container has display grid to show that different divs are all treated the same and turned into perfect columns with the container having the grid-template-columns: auto auto auto;

 // this makes the classes inside of the container all line up in perfect columns, in the grid that is created in our container with display: grid;
 grid-template-columns: auto auto auto; 
 ---three columns all utilising the space with auto, split into parts that together use the entire pageeee

 COlumns STOP


 NAV::

 with @media (min-width: 600px) ---- we have :

 
  header {
    justify-content: start;
  }

  nav {
    display: block;
    position: static;
  }

  nav li {
    display: inline-block;
    padding: 0px;
  }

  header label {
    display: none;
  }


-----------this nav stays unaltered above 600px

under 600px this is the nav::

nav {
  margin-left: 25px;
  display: none;
  position: fixed;
  top: 45px;
  background: var(--color-header-footer);
  z-index: 1000;
  right: 0px;
}


-------for the nav to float right we made the nav sit in a container that encapsulates the entire viewport, then we added float right to the ul that was located in the nav, it utilisesds what it has, all is relative to the elements

 NAV stop



