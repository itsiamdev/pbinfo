#include <iostream>
#include <climits>

int k;

int main() {
    std::cin >> k;
    int x, lung = 0, lungmax = 0, lungmin = 0;
    int max = INT_MIN;
    int min = INT_MAX;
    do{
        std::cin >> x;
        if(!x)
            break;
        lung++;
        if(x % 10 == k && x > max)
            max = x, lungmax = lung;
        if(x % 10 == k && x < min)
            min = x, lungmin = lung;
    }while(x);
    if(lungmax < lungmin)
        std::swap(lungmax, lungmin);
    if(lungmin == 0 && lungmax == 0)
        std::cout << "NU EXISTA";
    else std::cout << lungmax - lungmin + 1;

    return 0;
}