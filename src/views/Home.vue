<template>
  <div>
  <mdb-carousel :interval="8000" showControls showIndicators>
    <mdb-carousel-item img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" mask="black-light" alt="First slide">
      <mdb-carousel-caption title="Check your account statements"></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" mask="black-strong" alt="Second slide">
      <mdb-carousel-caption title="Categorize your expenses"></mdb-carousel-caption>
    </mdb-carousel-item>
    <mdb-carousel-item img src="https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" mask="black-slight" alt="Third slide">
      <mdb-carousel-caption title="Identify room for change"></mdb-carousel-caption>
    </mdb-carousel-item>
  </mdb-carousel>

  <br>

    <mdb-container>
    <mdb-row>
      <mdb-card-group deck>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Categorize</mdb-card-title>
            <mdb-card-text>Pinpoint your money habits by taking inventory of where you spend most of yoru money. </mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Expenses</mdb-card-title>
            <mdb-card-text>Your spending will consist of both fixed expenses and variable expenses. Fixed expenses are less likely to change from month to month. They include mortgage or rent, utilities, insurance and debt payments. You’ll have more room to adjust variable expenses like food, clothing and travel</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
        <mdb-card>
          <mdb-view hover>
            <a href="#!">
              <mdb-card-image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Card image cap"></mdb-card-image>
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body>
            <mdb-card-title>Analytics</mdb-card-title>
            <mdb-card-text>As you track, be ready to make adjustments. It’s worth your time to keep tabs on your monthly expenses because of what you’ll uncover. “Tracking expenses can be very valuable for finding out what’s really costing you, and what is not as bad as you thought.</mdb-card-text>
          </mdb-card-body>
        </mdb-card>
      </mdb-card-group>
    </mdb-row>
  </mdb-container>
  <!-- Footer -->
  <mdb-footer color="indigo" class="font-small pt-0">
    <mdb-container>
      <mdb-row>
        <mdb-col md="12">
          <div class="mb-5 flex-center">
            <!-- <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a> -->
            <a href="https://twitter.com/1codechic"class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i></a>
            <!-- <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a> -->
            <a href="https://www.linkedin.com/in/antiffiamcelrath/"class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a>
            <!-- <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a> -->
            <!-- <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x"> </i></a> -->
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2018 Copyright</a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</div>

</template>

<script>
  import { mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardImage, mdbCardHeader, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbCardUp, mdbCardAvatar, mdbCardGroup, mdbBtn, mdbView, mdbMask, mdbIcon, mdbFooter  } from 'mdbvue';
  export default {
    name: 'CarouselPage',
    components: {
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardImage,
      mdbCardHeader,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbCardFooter,
      mdbCardUp,
      mdbCardAvatar,
      mdbCardGroup,
      mdbBtn,
      mdbView,
      mdbMask,
      mdbIcon,
      mdbFooter
    }
  }
</script>