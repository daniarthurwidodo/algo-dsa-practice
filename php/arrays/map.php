<?php

$array = [1, 2, 3, 4, 5];
$mapped = array_map(function($item) {
    return $item * 2;
}, $array);

print_r($mapped);
