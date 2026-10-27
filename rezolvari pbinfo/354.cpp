#include <iostream>
using namespace std;
int main (){
    int n,MAX = -10000,x;
    cin >> n;
    for (int i = 1; i <= n; ++i){
        cin >> x;
        if (x > MAX)
        MAX = x;
    }
    cout << MAX;
    return 0;
}