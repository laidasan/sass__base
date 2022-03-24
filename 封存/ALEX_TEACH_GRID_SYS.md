
# Alex Teach Scss - grid system
// $columns: 10;
// $container: 1000px;
// $gutter: 20px;
// $breakpoints:(
//     md:768px,
//     sm:480px
// );

// .container{
//     width: 1440px;
//     margin-right: auto;
//     margin-left: auto;
//     &:after{
//         content: "";
//         display: block;
//         clear: both;
//     }

    // @media screen and (max-width: map-get($breakpoints, md)){
    //     width: 980px;
    // }
    // @media screen and (max-width: map-get($breakpoints, sm)){
    //     width: 100%;
    // }
// }

// @for $col from 1 through $columns {
//     .col-#{$col}{
//         width: calc(#{100% / $columns * $col} - #{$gutter});
//         margin-left: $gutter / 2;
//         margin-right: $gutter / 2;
//         float: left;
//         background-color: rgba(#fff,.8);
//         height: 10px;
//     }
// }


// @each $key,$value in $breakpoints {
//     @media screen and (max-width: $value){
//         @for $col from 1 through $columns {
//             .#{$key}\:col-#{$col}{
//                 width: calc(#{100% / $columns * $col} - #{$gutter});
//                 margin-left: $gutter / 2;
//                 margin-right: $gutter / 2;
//                 float: left;
//                 background-color: rgba(#fff,.8);
//                 height: 10px;
//             }
//         }
//     }
// }
