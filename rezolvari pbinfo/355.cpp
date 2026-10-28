#include <iostream>
using namespace std;
int main (){
    int n ,MIN = 1000000, nr;
    cin >> n ;
    for (int i = 1; i <= n; ++i){
        cin >> nr;
        if (nr < MIN)
        MIN = nr;
    }
    cout << MIN;
    return 0;
}